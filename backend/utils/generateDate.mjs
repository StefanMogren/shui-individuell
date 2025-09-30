export const generateDate = () => {
	/* 	const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "Europe/Stockholm",
		}; */
	// const d = new Date(Date.now()).toLocaleString();
	// return d.toLocaleString("sv-SE", options);

	const dateFormatter = new Intl.DateTimeFormat("sv-SE", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: "Europe/Stockholm",
	});

	const formattedDate = dateFormatter.format(new Date());
	// Ska alltså returnera datum och tid i formated "YYYY-MM-DD HH:MM"

	return formattedDate;
	// return new Date(Date.now()).toLocaleString();
};

export default generateDate;
