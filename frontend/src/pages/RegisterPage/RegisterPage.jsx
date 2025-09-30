import "./registerPage.css";
import { registerApi } from "../../api/auth.js";
import { Link } from "react-router-dom";
import handleForm from "../../utils/handleForm.js";
import Input from "../../components/Input/Input.jsx";

function RegisterPage() {
	async function register(event) {
		const response = await handleForm(event, registerApi);

		if (response) {
			console.log("Registered!");
		}
	}

	return (
		<section>
			<h1>Title for RegisterPage</h1>
			<form action='post' onSubmit={register}>
				<Input labelText='Användarnamn' inputType='text' inputName='username' />

				<Input labelText='Lösenord' inputType='password' inputName='password' />

				<Input
					labelText='Upprepa lösenord'
					inputType='password'
					inputName='repeatPassword'
				/>

				<Input labelText='Email' inputType='email' inputName='email' />
				<button type='submit'>Registera ny medlem</button>
			</form>
			<Link to={"/login"}>Redan en medlem? Logga in här.</Link>
		</section>
	);
}
export default RegisterPage;
