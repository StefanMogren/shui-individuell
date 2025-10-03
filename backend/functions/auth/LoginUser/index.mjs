import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { validateLogin } from "../../../middlewares/validateLogin.mjs";
import { comparePasswords } from "../../../utils/bcrypt.mjs";
import { generateToken } from "../../../utils/jwt.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { getUser } from "../../../services/users.mjs";

export const handler = middy(async (event) => {
	const response = await getUser(event.body.username);

	if (response) {
		const { username, password, role } = response;
		const doesPasswordMatch = await comparePasswords(
			event.body.password,
			password
		);

		if (doesPasswordMatch) {
			const token = generateToken({
				username: username,
				role: role,
			});

			return sendResponse(200, {
				message: "User logged in successfully!",
				success: true,
				username: username,
				role: role,
				token: `Bearer ${token}`,
			});
		} else {
			return sendResponse(400, {
				message: "Password and/or username does not match.(It's password)",
				success: false,
			});
		}
	} else {
		return sendResponse(400, {
			message: "Password and/or username does not match.(It's username)",
			success: false,
		});
	}
})
	.use(httpJsonBodyParser())
	.use(validateLogin())
	.use(errorHandler());
