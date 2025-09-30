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
		<section className='login-page'>
			<h2>Logga in för att fortsätta</h2>

			<form action='post' onSubmit={login}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<button type='submit'>Logga in</button>
			</form>

			<button onClick={() => setActiveForm("REGISTER")}>
				Inte en medlem? Registrera dig här.
			</button>
			{/* <Link to={"/register"}></Link> */}
		</section>
	);
}
export default LoginForm;
