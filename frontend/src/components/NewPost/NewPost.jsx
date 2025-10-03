import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";

import { newPostApi } from "../../api/posts.js";
import { useClickOutside } from "../../hooks/useClickOutside.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { useState } from "react";

function NewPost({ setShowOverlay }) {
	const { token } = useAuthToken();
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const ref = useClickOutside(() => {
		setShowOverlay(false);
	});

	async function submitPost(event) {
		const response = await handleForm(event, newPostApi, token);

		if (response.success === true) {
			console.log("status är 201!");
			window.location.reload();
		} else {
			setErrorMessage(response.message);

			setShowError(true);
		}
	}

	return (
		<section className='post post--position-absolute' ref={ref}>
			<section className='post__container'>
				<form className='flex-column' action='post' onSubmit={submitPost}>
					<label className='input__label' htmlFor='textId'>
						Skapa nytt inlägg
						<textarea
							className='input__textarea'
							name='text'
							id='textId'
							rows={10}
							minLength={2}
							maxLength={300}></textarea>
					</label>

					<button className='button-style ' type='submit'>
						Publicera
					</button>
					{showError && (
						<ErrorMessage text={errorMessage} setShowError={setShowError} />
					)}
				</form>
			</section>
			<div className='post__triangle'></div>
		</section>
	);
}
export default NewPost;
