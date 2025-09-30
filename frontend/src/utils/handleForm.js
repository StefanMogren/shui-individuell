export default async function handleForm(event, apiCall) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const formJson = Object.fromEntries(formData.entries());

	const response = await apiCall(formJson);

	if (response) return response;
	else return false;
}
