import Joi from "joi";

export const postSchema = Joi.object({
	text: Joi.string().min(2).max(300).required(),
}).unknown(false);
