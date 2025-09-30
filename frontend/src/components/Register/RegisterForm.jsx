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
		<section>
			<h2>Registrera ny användare</h2>
			<form action='post' onSubmit={registerUser}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<Input
					labelText='Upprepa lösenord'
					inputType='password'
					inputName='repeatPassword'
				/>

				<Input labelText='Email' inputType='email' inputName='email' />
				<button type='submit'>Registera mig</button>
			</form>
			<button onClick={() => setActiveForm("LOGIN")}>
				Redan en medlem? Logga in här.
			</button>
			{/* <Link to={"/login"}>Redan en medlem? Logga in här.</Link> */}
		</section>
	);
}
export default RegisterForm;
