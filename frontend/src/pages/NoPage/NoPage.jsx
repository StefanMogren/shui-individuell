import "./noPage.css";
import { Link } from "react-router-dom";

function NoPage() {
	return (
		<>
			<h1>404 page not found</h1>
			<p>
				With text that the requested page can't be found and a button to go back
				to the home page.
			</p>
			<Link to={"/"}>Return to home page here.</Link>
		</>
	);
}

export default NoPage;
