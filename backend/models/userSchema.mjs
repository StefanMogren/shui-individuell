import Joi from "joi";

export const userSchema = Joi.object({
	username: Joi.string().alphanum().min(2).required(),
	password: Joi.string()
		.alphanum()
		.min(8)
		.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)
		.messages({
			"string.pattern.base":
				"Lösenordet måste innehålla minst en stor bokstav, en liten bokstav och en siffra.",
		})
		.required(),

	// .valid(Joi.ref()) kontrollerar så att "repeatPassword" bara godkänns ifall dess värde matchar "password"
	repeatPassword: Joi.string()
		.valid(Joi.ref("password"))
		.required()
		.messages({ "any.only": "Password and repeat password must match." }),
	email: Joi.string().email().required(),
	role: Joi.string().valid("USER", "ADMIN").required(),
});
