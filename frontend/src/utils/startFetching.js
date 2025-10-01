export default async function startFetching(
	fetchRequest,
	setState,
	fetchArgument
) {
	const response = await fetchRequest(fetchArgument ?? "");
	if (response) {
		response.sort((a, b) => a.dateCreated.localeCompare(b.dateCreated));
		response.reverse();
		setState(response);
	}
}
