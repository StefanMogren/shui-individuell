import "./registerPage.css";
import { Link } from "react-router-dom";

function RegisterPage() {
	return (
		<>
			<h1>Title for RegisterPage</h1>
			<p>
				With username, password, repeat password, confirm, and the text "Already
				a member? Login here."d link.
			</p>
			<Link to={"/login"}>Already a member? Login here.</Link>
		</>
	);
}
export default RegisterPage;
