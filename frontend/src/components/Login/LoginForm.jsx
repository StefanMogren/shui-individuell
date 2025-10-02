import { loginApi } from "../../api/auth.js";
import "./loginForm.css";
import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import Input from "../Input/Input.jsx";
import { useAuthStore } from "../../stores/useAuthStore.js";

function LoginForm({ setActiveForm }) {
	const { setToken } = useAuthToken();
	const setAuth = useAuthStore((state) => state.setAuth);

	async function login(event) {
		const response = await handleForm(event, loginApi);

		if (response) {
			console.log("Logged in successfully!");

			setToken(response.token);

			setAuth({
				user: {
					username: response.username,
					role: response.role,
				},
				token: response.token,
			});
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
