import middy from "@middy/core";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { sendResponse } from "../../../responses/sendResponse.mjs";

export const handler = middy(async (event) => {
	if (event?.user) {
		return sendResponse(200, {
			message: "Token verification successful.",
			username: event.user,
		});
	} else {
		return sendResponse(500, {
			message: "Token is expired or invalid.",
		});
	}
})
	.use(authenticateUser())
	.use(errorHandler());
