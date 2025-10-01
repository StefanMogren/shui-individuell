import axios from "axios";

export const fetchPosts = async () => {
	const response = await axios
		.get("https://0bltjosl70.execute-api.eu-north-1.amazonaws.com/api/posts")
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});

	if (response.status === 200) {
		return response.data.posts;
	} else return false;
};

export const fetchPostsByUser = async (username) => {
	const response = await axios
		.get(
			`https://0bltjosl70.execute-api.eu-north-1.amazonaws.com/api/posts/${username}`
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});

	if (response.status === 200) {
		return response.data.posts;
	} else return false;
};

export const newPostApi = async (data, token) => {
	const config = {
		headers: {
			Authorization: token,
		},
	};
	const response = await axios
		.post(
			"https://0bltjosl70.execute-api.eu-north-1.amazonaws.com/api/posts",
			data,
			config
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});

	if (response.status === 201) {
		return response;
	} else return false;
};
