import "./loginOrRegister.css";
import { useState } from "react";
import LoginForm from "../Login/LoginForm.jsx";
import RegisterForm from "../Register/RegisterForm.jsx";
import { useClickOutside } from "../../hooks/useClickOutside.js";

function LoginOrRegister({ setShowOverlay }) {
	const [activeForm, setActiveForm] = useState("LOGIN");
	const [transition, setTransition] = useState(false);

	setTimeout(() => {
		setTransition(true);
	}, "10");

	const ref = useClickOutside(() => {
		setShowOverlay(false);
	});

	return (
		<div
			ref={ref}
			className={`log-reg-overlay ${transition ? "transition" : ""}`}>
			<button
				className='log-reg-overlay__close-btn'
				onClick={() => setShowOverlay(false)}>
				X
			</button>
			<section className='log-reg-overlay__flex-column'>
				{activeForm === "LOGIN" ? (
					<LoginForm setActiveForm={setActiveForm} />
				) : (
					<RegisterForm setActiveForm={setActiveForm} />
				)}
			</section>
		</div>
	);
}
export default LoginOrRegister;
