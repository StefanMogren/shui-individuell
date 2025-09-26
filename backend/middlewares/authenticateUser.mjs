import { verifyToken } from "../utils/jwt.mjs";

export const authenticateUser = () => ({
	before: (handler) => {
		const authHeader =
			handler.event.headers?.Authorization ||
			handler.event.headers?.authorization;

		console.log("AuthHeader", handler.event);

		if (!authHeader) {
			throw new Error("No token provided.");
		}

		const token = authHeader.split(" ")[1];

		try {
			const user = verifyToken(token);
			console.log("TOKEN: ", token);

			if (!user) {
				throw new Error("Invalid token");
			}

			// Ser till så event.user får värdet som det verifierade tokenet har
			// Dessa värden är role: "USER" och username: "namn"
			handler.event.user = user;
		} catch (error) {
			console.log("Error in authenticateUser():", error.message);
			throw new Error("Unauthorized token");
		}
	},
});
