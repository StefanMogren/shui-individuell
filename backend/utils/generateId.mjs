import { v4 as uuid } from "uuid";

export const generateId = () => {
	const uniqueId = uuid().substring(0, 6);
	return uniqueId;
};
