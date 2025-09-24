import jwt from "jsonwebtoken";

export const generateToken = (user) => {
	const payload = user;
	const token = jwt.sign(payload, "irrationallysane", {
		expiresIn: "1h",
	});
	return token;
};

export const verifyToken = (token) => {
	try {
		const decoded = jwt.verify(token, "irrationallysane");
		return decoded;
	} catch (error) {
		console.log(error.message);
		return null;
	}
};
