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

	// Första regex bort tomma rader ifall de är fler än en.
	// Andra regex bort tomma rader efter sista texten.
	const adjustedText = text.replace(/\n{2,}/g, "\n\n").replace(/\n+$/g, "");

	const response = await editPost(username, adjustedText, postId);

	if (response) {
		return sendResponse(200, {
			message: "Inlägget har redigerats.",
			response,
			success: true,
		});
	} else {
		return sendResponse(404, {
			message: `Du har inget inlägg med postId: ${postId}.`,
			success: false,
		});
	}
})
	.use(httpJsonBodyParser())
	.use(authenticateUser())
	.use(validatePost())
	.use(errorHandler());
