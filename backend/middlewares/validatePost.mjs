import { postSchema } from "../models/postSchema.mjs";

export const validatePost = () => ({
	before: (handler) => {
		const { error, value } = postSchema.validate(handler.event.body);
		if (error) throw new Error(error.details[0].message);
		return;
	},
});
