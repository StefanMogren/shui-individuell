// import "./text.css";
import handleForm from "../../utils/handleForm.js";
import { useAuthToken } from "../../hooks/useAuthToken.js";

import { newPostApi } from "../../api/posts.js";
import { useClickOutside } from "../../hooks/useClickOutside.js";

function NewPost({ setShowOverlay }) {
	const { token } = useAuthToken();

	const ref = useClickOutside(() => {
		setShowOverlay(false);
	});

	async function submitPost(event) {
		const response = await handleForm(event, newPostApi, token);

		if (response.status === 201) {
			console.log("status är 201!");
			window.location.reload();
		} else {
			console.log("responsen är false...");
		}
	}

	return (
		<section className='post post--position-absolute' ref={ref}>
			<section className='post__container'>
				<form action='post' onSubmit={submitPost}>
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

					<button className='post__submit-btn' type='submit'>
						Publicera
					</button>
				</form>
			</section>
			<div className='post__triangle'></div>
		</section>
	);
}
export default NewPost;
