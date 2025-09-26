export const generateDate = () => {
	const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "Europe/Stockholm",
	};
	const d = new Date();
	return d.toLocaleString("sv-SE", options);
};

export default generateDate;
