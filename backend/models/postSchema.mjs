import Joi from "joi";

export const postSchema = Joi.object({
	text: Joi.string().min(2).max(300).required(),
	username: Joi.string().alphanum().required(),
});
