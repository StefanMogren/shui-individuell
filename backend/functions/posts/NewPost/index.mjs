import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { validatePost } from "../../../middlewares/validatePost.mjs";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { createNewPost } from "../../../services/posts.mjs";
export const handler = middy(async (event) => {
	const { text, username } = event.body;
	const user = event.user;

	// Första regex bort tomma rader ifall de är fler än en.
	// Andra regex bort tomma rader efter sista texten.
	const adjustedText = text.replace(/\n{2,}/g, "\n\n").replace(/\n+$/g, "");

	const newPost = await createNewPost(adjustedText, user);

	if (newPost) {
		return sendResponse(201, {
			message: "Successfully created a new post!",
			success: true,
			text: text,
			username: username,
		});
	} else {
		return sendResponse(500, {
			message: "Failed to create a new post.",
			success: false,
		});
	}
})
	.use(httpJsonBodyParser())
	.use(authenticateUser())
	.use(validatePost())
	.use(errorHandler());
