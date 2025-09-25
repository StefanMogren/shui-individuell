import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
// import { validateLogin } from "../../../middlewares/validateLogin.mjs";
import { validateNewUser } from "../../../middlewares/validateNewUser.mjs";
import { comparePasswords } from "../../../utils/bcrypt.mjs";
import { generateToken } from "../../../utils/jwt.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";

import { registerUser } from "../../../services/users.mjs";

export const handler = middy(async (event) => {
	const response = await registerUser(event.body);
	if (response) {
		return sendResponse(201, {
			message: "Successfully registered new user!",
		});
	} else {
		return sendResponse(500, {
			message: "Failed to register new user.",
		});
	}
})
	.use(httpJsonBodyParser())
	.use(validateNewUser())
	.use(errorHandler());
