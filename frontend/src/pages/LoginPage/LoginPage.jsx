import { loginApi } from "../../api/auth";
import "./loginPage.css";
import { Link } from "react-router-dom";
import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";

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
				{/* Användarnamn */}
				<label className='login-page__input-label' htmlFor='usernameId'>
					Användarnamn
					<input type='text' name='username' id='usernameId' />
				</label>

				{/* Lösenord */}
				<label className='login-page__input-label' htmlFor='passwordId'>
					Lösenord
					<input type='password' name='password' id='passwordId' />
				</label>
				<button type='submit'>Logga in</button>
			</form>

			<Link to={"/register"}>Not a member? Register here.</Link>
			<p>
				While not the front page, it's the "default" page unless a user is
				included in the header
			</p>
		</section>
	);
}
export default LoginPage;
