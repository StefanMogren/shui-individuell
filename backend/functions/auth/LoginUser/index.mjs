import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { validateLogin } from "../../../middlewares/validateLogin.mjs";
import { comparePasswords } from "../../../utils/bcrypt.mjs";
import { generateToken } from "../../../utils/jwt.mjs";

export const handler = middy(async (event) => {
	const response = "is responding... but not really.";
	if (response) {
		return sendResponse(200, {
			message: "Successfully connected to LoginUser!",
			response,
		});
	} else {
		return sendResponse(400, { message: "Oops! Something borked!" });
	}
});
