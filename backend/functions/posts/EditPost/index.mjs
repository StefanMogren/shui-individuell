import middy from "@middy/core";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { validatePost } from "../../../middlewares/validatePost.mjs";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { editPost } from "../../../services/posts.mjs";

export const handler = middy(async (event) => {
	const { username } = event.user;
	const { text, postId } = event.body;
	const response = await editPost(username, text, postId);

	if (response) {
		return sendResponse(200, {
			message: "Successfully edited post.",
			response,
			theUser: event.user,
			theBody: event.body,
		});
	} else {
		return sendResponse(500, {
			message: "Failed to edit post",
		});
	}
})
	.use(httpJsonBodyParser())
	.use(authenticateUser())
	.use(validatePost())
	.use(errorHandler());
