import { client } from "./client.mjs";
import { hashPassword } from "../utils/bcrypt.mjs";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

export const registerUser = async (user) => {
	const newUser = {
		PK: `USER#${user.username}`,
		SK: "PROFILE",
		email: user.email,
		password: await hashPassword(user.password),
		role: user.role,
	};

	const params = {
		TableName: "shui-table",
		Item: marshall(newUser),
	};

	try {
		const result = await client.send(new PutItemCommand(params));
		return result;
	} catch (error) {
		console.log("Error with addUser in db:", error.message);
		return false;
	}
};

export const getUser = async (username) => {
	const findUser = {
		PK: `USER#${username}`,
		SK: "PROFILE",
	};

	const params = {
		TableName: "shui-table",
		Key: marshall(findUser),
	};
	try {
		const { Item } = await client.send(new GetItemCommand(params));
		if (!Item) return false;

		const user = unmarshall(Item);
		return user;
	} catch (error) {
		console.log("Error with getUser in db:", error.message);
		return false;
	}
};
