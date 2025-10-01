import { loginApi } from "../../api/auth.js";
import "./loginForm.css";
import { Link } from "react-router-dom";
import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import Input from "../Input/Input.jsx";

function LoginForm({ setActiveForm }) {
	const { setToken } = useAuthToken();
	async function login(event) {
		const response = await handleForm(event, loginApi);

		if (response) {
			setToken(response.token);
		}
	}

	return (
		<>
			<h2>Logga in för att fortsätta</h2>

			<form
				className='log-reg-overlay__flex-column'
				action='post'
				onSubmit={login}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<button className='log-reg-overlay__confirm-btn' type='submit'>
					Logga in
				</button>
			</form>

			<button
				className='log-reg-overlay__swap-btn'
				onClick={() => setActiveForm("REGISTER")}>
				Inte en medlem? Registrera dig här.
			</button>
			{/* <Link to={"/register"}></Link> */}
		</>
	);
}
export default LoginForm;
