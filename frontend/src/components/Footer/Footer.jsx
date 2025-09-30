import "./footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister.jsx";

function Footer() {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<footer>
			<h1>Component for Footer</h1>
			<p>With button to home page and a "fake" profile icon</p>
			<Link to={"/"}>Home</Link>
			<button onClick={() => setShowOverlay(true)}>Logga in</button>
			{showOverlay && <LoginOrRegister setShowOverlay={setShowOverlay} />}
		</footer>
	);
}
export default Footer;
