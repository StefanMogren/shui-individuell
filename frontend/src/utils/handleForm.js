export default async function handleForm(event, apiCall, token) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const formJson = Object.fromEntries(formData.entries());

	const response = await apiCall(formJson, token ?? "");
	console.log("Responsen från handleForm är:");

	console.log(response);

	if (response) return response;
	else return false;
}
