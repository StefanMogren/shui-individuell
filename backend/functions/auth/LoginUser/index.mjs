import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { validateLogin } from "../../../middlewares/validateLogin.mjs";
import { comparePasswords } from "../../../utils/bcrypt.mjs";
import { generateToken } from "../../../utils/jwt.mjs";
import jsonBodyParser from "@middy/http-json-body-parser";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { getUser } from "../../../services/users.mjs";

export const handler = middy(async (event) => {
	const response = await getUser(event.body.username);

	if (response) {
		const doesPasswordMatch = await comparePasswords(
			event.body.password,
			response.password
		);

		if (doesPasswordMatch) {
			return sendResponse(200, {
				message: "User logged in successfully!",
			});
		} else {
			return sendResponse(400, {
				message: "Password and/or username does not match.(It's password)",
			});
		}
	} else {
		return sendResponse(400, {
			message: "Password and/or username does not match.(It's username)",
		});
	}
})
	.use(jsonBodyParser())
	.use(validateLogin())
	.use(errorHandler());
