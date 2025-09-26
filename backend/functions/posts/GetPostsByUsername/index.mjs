import middy from "@middy/core";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { getPostsByUsername } from "../../../services/posts.mjs";

export const handler = middy(async (event) => {
	const { username } = event.pathParameters;
	const response = await getPostsByUsername(username);
	if (response.length > 0) {
		return sendResponse(200, {
			message: `Successfully fetched all posts by user ${username}.`,
			posts: response,
		});
	} else {
		return sendResponse(404, {
			message: `No posts made by user ${username}.`,
		});
	}
})
	.use(authenticateUser())
	.use(errorHandler());
