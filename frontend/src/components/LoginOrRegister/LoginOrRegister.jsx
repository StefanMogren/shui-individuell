import "./loginOrRegister.css";
import { useState } from "react";
import LoginForm from "../Login/LoginForm.jsx";
import RegisterForm from "../Register/RegisterForm.jsx";

function LoginOrRegister({ setShowOverlay }) {
	const [activeForm, setActiveForm] = useState("LOGIN");
	const [transition, setTransition] = useState(false);

	setTimeout(() => {
		setTransition(true);
	}, "10");

	// const loginOrRegister = "LOGIN";

	return (
		<div className={`log-reg-overlay ${transition ? "transition" : ""}`}>
			<button
				className='log-reg-overlay__button'
				onClick={() => setShowOverlay(false)}>
				X
			</button>
			{activeForm === "LOGIN" ? (
				<LoginForm setActiveForm={setActiveForm} />
			) : (
				<RegisterForm setActiveForm={setActiveForm} />
			)}
		</div>
	);
}
export default LoginOrRegister;
