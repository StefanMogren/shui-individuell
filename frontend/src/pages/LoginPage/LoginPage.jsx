import "./loginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
	return (
		<>
			<h1>Title for LoginPage</h1>
			<p>
				With username, password, login button, and "Not a member? Register here"
				link.
			</p>
			<p>
				While not the front page, it's the "default" page unless a user is
				included in the header
			</p>
			<Link to={"/register"}>Not a member? Register here.</Link>
		</>
	);
}
export default LoginPage;
