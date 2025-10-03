import { loginApi } from "../../api/auth.js";
import "./loginForm.css";
import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import Input from "../Input/Input.jsx";
import { useAuthStore } from "../../stores/useAuthStore.js";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

function LoginForm({ setActiveForm }) {
	const { setToken } = useAuthToken();
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const setAuth = useAuthStore((state) => state.setAuth);

	async function login(event) {
		const response = await handleForm(event, loginApi);

		if (response.success === true) {
			// Uppdaterar user och token i useAuthStore
			setAuth({
				user: {
					username: response.username,
					role: response.role,
				},
				token: response.token,
			});

			// Uppdaterar token i localStorage
			setToken(response.token);

			// Laddar om sidan
			window.location.reload();
		} else {
			setErrorMessage(response.message);

			setShowError(true);
		}
	}

	return (
		<>
			<h2>Logga in för att fortsätta</h2>

			<form className='flex-column' action='post' onSubmit={login}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<button className='button-style' type='submit'>
					Logga in
				</button>
			</form>
			{showError && (
				<ErrorMessage text={errorMessage} setShowError={setShowError} />
			)}

			<button
				className='log-reg-overlay__swap-btn'
				onClick={() => setActiveForm("REGISTER")}>
				Inte en medlem? Registrera dig här.
			</button>
		</>
	);
}
export default LoginForm;
