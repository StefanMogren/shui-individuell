export default async function handleForm(event, apiCall, token) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const formJson = Object.fromEntries(formData.entries());

	const response = await apiCall(formJson, token ?? "");

	if (response) return response;
	else return false;
}
