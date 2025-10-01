import "./registerForm.css";
import { registerApi } from "../../api/auth.js";
import { Link } from "react-router-dom";
import handleForm from "../../utils/handleForm.js";
import Input from "../Input/Input.jsx";

function RegisterForm({ setActiveForm }) {
	async function registerUser(event) {
		const response = await handleForm(event, registerApi);

		if (response) {
			console.log("Registered!");
		}
	}

	return (
		<>
			<h2>Registrera ny användare</h2>
			<form
				className='log-reg-overlay__flex-column'
				action='post'
				onSubmit={registerUser}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<Input
					labelText='Upprepa lösenord'
					inputType='password'
					inputName='repeatPassword'
				/>

				<Input labelText='Email' inputType='email' inputName='email' />
				<button className='log-reg-overlay__confirm-btn' type='submit'>
					Registera mig
				</button>
			</form>
			<button
				className='log-reg-overlay__swap-btn'
				onClick={() => setActiveForm("LOGIN")}>
				Redan en medlem? Logga in här.
			</button>
		</>
	);
}
export default RegisterForm;
