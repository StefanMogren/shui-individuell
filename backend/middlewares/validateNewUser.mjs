import { userSchema } from "../models/userSchema.mjs";

export const validateNewUser = () => ({
	before: (handler) => {
		const { error, value } = userSchema.validate(handler.event.body);
		if (error) throw new Error(error.details[0].message);
		return;
	},
});
