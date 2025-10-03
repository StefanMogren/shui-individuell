import middy from "@middy/core";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { getAllPosts } from "../../../services/posts.mjs";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";

export const handler = middy(async (event) => {
	const response = await getAllPosts();

	if (response) {
		return sendResponse(200, {
			message: "Successfully fetched all posts!",
			success: true,
			posts: response,
		});
	} else {
		return sendResponse(500, {
			message: "Failed to fetch posts.",
			success: false,
		});
	}
})
	// .use(authenticateUser())
	.use(errorHandler());
