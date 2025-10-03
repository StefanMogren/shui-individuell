import "./registerForm.css";
import { registerApi } from "../../api/auth.js";
import handleForm from "../../utils/handleForm.js";
import Input from "../Input/Input.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { useState } from "react";
import { loginApi } from "../../api/auth.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import { useAuthStore } from "../../stores/useAuthStore.js";

function RegisterForm({ setActiveForm }) {
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const setAuth = useAuthStore((state) => state.setAuth);
	const { setToken } = useAuthToken();

	async function registerUser(event) {
		const response = await handleForm(event, registerApi);

		if (response.success === true) {
			console.log(response);
			const loginData = {
				username: response.username,
				password: response.password,
			};

			const loginResponse = await loginApi(loginData);

			if (loginResponse.success === true) {
				setAuth({
					user: {
						username: loginResponse.username,
						role: loginResponse.role,
					},
					token: loginResponse.token,
				});

				setToken(loginResponse.token);

				window.location.reload();
			}
		} else {
			setErrorMessage(response.message);

			setShowError(true);
		}
	}

	return (
		<>
			<h2>Registrera ny användare</h2>
			<form className='flex-column' action='post' onSubmit={registerUser}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<Input
					labelText='Upprepa lösenord'
					inputType='password'
					inputName='repeatPassword'
				/>

				<Input labelText='Email' inputType='email' inputName='email' />
				<button className='button-style' type='submit'>
					Registera mig
				</button>
			</form>
			{showError && (
				<ErrorMessage text={errorMessage} setShowError={setShowError} />
			)}
			<button
				className='log-reg-overlay__swap-btn'
				onClick={() => setActiveForm("LOGIN")}>
				Redan en medlem? Logga in här.
			</button>
		</>
	);
}
export default RegisterForm;
