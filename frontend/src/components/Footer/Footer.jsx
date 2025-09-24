import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<h1>Component for Footer</h1>
			<p>With button to home page and a "fake" profile icon</p>
			<Link to={"/"}>Home</Link>
			<Link to={"/login"}>Login</Link>
		</footer>
	);
}
export default Footer;
