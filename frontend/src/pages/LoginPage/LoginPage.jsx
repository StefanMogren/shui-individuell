import { loginApi } from "../../api/auth.js";
import "./loginPage.css";
import { Link } from "react-router-dom";
import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import Input from "../../components/Input/Input.jsx";

function LoginPage() {
	const { setToken } = useAuthToken();
	async function login(event) {
		const response = await handleForm(event, loginApi);

		if (response) {
			setToken(response.token);
		}
	}

	return (
		<section className='login-page'>
			<h1>Logga in för att fortsätta</h1>

			<form action='post' onSubmit={login}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<button type='submit'>Logga in</button>
			</form>

			<Link to={"/register"}>Inte en medlem? Registrera dig här.</Link>
			<p>
				While not the front page, it's the "default" page unless a user is
				included in the header
			</p>
		</section>
	);
}
export default LoginPage;
