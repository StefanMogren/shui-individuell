import axios from "axios";

export const loginApi = async (data) => {
	const response = await axios
		.post(
			"https://0bltjosl70.execute-api.eu-north-1.amazonaws.com/api/auth/login",
			data
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});

	if (response.status === 200) {
		return response.data;
	} else {
		return response;
	}
};

export const registerApi = async (data) => {
	const response = await axios
		.post(
			"https://0bltjosl70.execute-api.eu-north-1.amazonaws.com/api/auth/register",
			data
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});

	if (response.status === 201) {
		return response;
	} else {
		return response.data;
	}
};
