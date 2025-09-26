import { client } from "./client.mjs";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import generateDate from "../utils/generateDate.mjs";
import { generateId } from "../utils/generateId.mjs";

export const getPosts = async () => {
	// QueryCommand

	try {
		const { Items } = await client.send(command);
		const posts = Items.map((item) => unmarshall(item));
		return rooms;
	} catch (error) {
		console.log("Error with getPosts in db:", error.message);
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
