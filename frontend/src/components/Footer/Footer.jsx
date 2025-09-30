import "./footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister.jsx";

function Footer() {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<footer className='footer'>
			<Link to={"/"}>
				<img className='footer__icon' src={"/icons/HomeIcon.svg"} />
			</Link>
			<button onClick={() => setShowOverlay(true)}>Logga in</button>
			{showOverlay && <LoginOrRegister setShowOverlay={setShowOverlay} />}
		</footer>
	);
}
export default Footer;
