import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { validatePost } from "../../../middlewares/validatePost.mjs";
// import { valid } from "joi";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
// import { validateLogin } from "../../../middlewares/validateLogin.mjs";
// import { comparePasswords } from "../../../utils/bcrypt.mjs";
// import { generateToken } from "../../../utils/jwt.mjs";
export const handler = middy(async (event) => {
	const bodyContent = event.body;
	return sendResponse(200, {
		message: "Successfully connected to NewPost!",
		bodyContent,
	});
})
	.use(httpJsonBodyParser())
	.use(authenticateUser())
	.use(validatePost())
	.use(errorHandler());
