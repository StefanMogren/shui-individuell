import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { sendResponse } from "../../../responses/sendResponse.mjs";
import { errorHandler } from "../../../middlewares/errorHandler.mjs";
import { validatePost } from "../../../middlewares/validatePost.mjs";
import { authenticateUser } from "../../../middlewares/authenticateUser.mjs";
import { createNewPost } from "../../../services/posts.mjs";
export const handler = middy(async (event) => {
	const body = event.body;
	console.log("LOG before createNewPost:", event.user);

	const newPost = await createNewPost(event.body.text, event.user);
	console.log("LOG after createNewPost:", event.user);

	if (newPost) {
		return sendResponse(201, {
			message: "Successfully created a new post!",
			text: event.body.text,
			username: event.body.username,
		});
	} else {
		return sendResponse(500, {
			message: "Failed to create a new post.",
		});
	}
})
	.use(httpJsonBodyParser())
	.use(authenticateUser())
	.use(validatePost())
	.use(errorHandler());
