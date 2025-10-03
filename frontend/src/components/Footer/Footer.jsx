import "./footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister.jsx";
import { useAuthStore } from "../../stores/useAuthStore.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";

function Footer() {
	const [showOverlay, setShowOverlay] = useState(false);
	const user = useAuthStore((state) => state.user);
	const clearAuth = useAuthStore((state) => state.clearAuth);
	const { setToken } = useAuthToken();

	function logOut() {
		clearAuth();
		setToken(null);
		window.location.reload();
	}

	return (
		<footer className='footer'>
			<Link to={"/"}>
				<img className='footer__icon' src={"/icons/HomeIcon.svg"} />
			</Link>
			{user ? (
				<button className='button-style' onClick={() => logOut()}>
					Logga ut
				</button>
			) : (
				<button className='button-style' onClick={() => setShowOverlay(true)}>
					Logga in
				</button>
			)}
			{showOverlay && <LoginOrRegister setShowOverlay={setShowOverlay} />}
		</footer>
	);
}
export default Footer;
