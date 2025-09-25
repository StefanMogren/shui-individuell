import { sendResponse } from "../responses/sendResponse.mjs";

export const errorHandler = () => ({
	onError: (handler) => {
		handler.response = sendResponse(400, { message: handler.error.message });
	},
});
