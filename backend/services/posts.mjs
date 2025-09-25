import { client } from "./client.mjs";
import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

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

export const createNewPost = async () => {
	try {
	} catch (error) {
		console.log("Error with createNewPost in db:", error.message);
		return false;
	}
};
