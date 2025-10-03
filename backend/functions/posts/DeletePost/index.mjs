import middy from "@middy/core";
// import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { DeletePost } from "../../../services/posts.mjs";

export const handler = middy(async (event) => {
	const { postId } = event.pathParameters;
	const { username } = event.user;
	const response = await DeletePost(username, postId);

	if (response) {
		return sendResponse(200, {
			message: "Successfully deleted post.",
			success: true,
		});
	} else {
		return sendResponse(404, {
			message: `User does not have a post with postId: ${postId}.`,
			success: false,
		});
	}
})
	.use(authenticateUser())
	.use(errorHandler());
