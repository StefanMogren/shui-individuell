import { hashPassword } from "../utils/bcrypt.mjs";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

export const addUser = async (user) => {
	console.log(user);
	// PutItemCommand

	try {
	} catch (error) {
		console.log("Error with addUser in db:", error.message);
	}
};

export const getUser = async (username) => {
	// GetItemCommand
	try {
	} catch (error) {
		console.log("Error with getUser in db:", error.message);
	}
};
