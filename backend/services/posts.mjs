import { client } from "./client.mjs";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import {
	PutItemCommand,
	GetItemCommand,
	UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import generateDate from "../utils/generateDate.mjs";
import { generateId } from "../utils/generateId.mjs";

export const getAllPosts = async () => {
	// QueryCommand
	const command = new QueryCommand({
		TableName: "shui-table",
		IndexName: "GSI1",
		KeyConditionExpression: "GSI1PK = :gsi1pk",
		ExpressionAttributeValues: {
			":gsi1pk": { S: "POST" },
		},
	});

	try {
		const { Items } = await client.send(command);
		const posts = Items.map((item) => unmarshall(item));
		return posts;
	} catch (error) {
		console.log("Error with getAllPosts in db:", error.message);
		return false;
	}
};

export const createNewPost = async (text, user) => {
	const postId = generateId();
	const newPost = {
		PK: `USER#${user.username}`,
		SK: `POST#${postId}`,
		GSI1PK: "POST",
		GSI1SK: postId,
		username: user.username,
		role: user.role,
		text: text,
		dateCreated: generateDate(),
	};

	const params = {
		TableName: "shui-table",
		Item: marshall(newPost),
	};
	try {
		const result = await client.send(new PutItemCommand(params));
		return result;
	} catch (error) {
		console.log("Error with createNewPost in db:", error.message);
		return false;
	}
};

export const getPostsByUsername = async (username) => {
	const command = new QueryCommand({
		TableName: "shui-table",
		KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk )",
		ExpressionAttributeValues: marshall({
			":pk": `USER#${username}`,
			":sk": `POST#`,
		}),
	});
	try {
		const { Items } = await client.send(command);
		const posts = Items.map((item) => unmarshall(item));
		return posts;
	} catch (error) {
		console.log("Error with getPostsByUsername in db:", error.message);
		return false;
	}
};

export const getPostById = async (postId, user) => {
	const command = new QueryCommand({
		TableName: "shui-table",
		KeyConditionExpression: "PK = :pk AND SK = :sk",
		ExpressionAttributeValues: {
			":pk": { S: `USER#${user.username}` },
			":sk": { S: `POST#${postId}` },
		},
	});

	try {
		const result = await client.send(new PutItemCommand(params));
		return result;
	} catch (error) {
		console.log("Error with createNewPost in db:", error.message);
		return false;
	}
};

export const editPost = async (username, text, postId) => {
	const command = {
		TableName: "shui-table",
		Key: marshall({
			PK: `USER#${username}`,
			SK: `POST#${postId}`,
		}),
		UpdateExpression: "SET #text = :text, #dateUpdated = :dateUpdated",
		ExpressionAttributeNames: {
			"#text": "text",
			"#dateUpdated": "dateUpdated",
		},
		ExpressionAttributeValues: marshall({
			":text": text,
			":dateUpdated": generateDate(),
		}),
		ConditionExpression: "attribute_exists(PK) AND attribute_exists(SK)",
		ReturnValues: "ALL_NEW",
	};

	try {
		const { Attributes } = await client.send(new UpdateItemCommand(command));
		return unmarshall(Attributes);
	} catch (error) {
		// if (error.name === "ConditionalCheckFailedException") {
		// console.error("User with postId doesn't exist.");
		// }
		console.log("Error with editPost in db:", error.message);
		return false;
	}
};
