import "./editPost.css";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import handleForm from "../../utils/handleForm.js";
import { editPostApi } from "../../api/posts.js";
import DeletePost from "../DeletePost/DeletePost.jsx";

function EditPost({ text, username, postId, setShowEditForm }) {
	const { token } = useAuthToken();

	async function editPost(event) {
		const response = await handleForm(event, editPostApi, token);

		if (response?.status === 200) {
			window.location.reload();
		}
	}

	return (
		<>
			<DeletePost postId={postId} token={token} />
			<form className='input__label' action='post' onSubmit={editPost}>
				<textarea
					className='input__textarea'
					name='text'
					id='textId'
					rows={10}
					minLength={2}
					maxLength={300}
					defaultValue={text}></textarea>
				<input type='hidden' name='postId' value={postId} />
				<button type='submit'>Bekräfta redigering</button>
			</form>
			<section className='post__flex-container'>
				<b>--- {username}</b>
				<button onClick={() => setShowEditForm(false)}>Avbryt</button>
			</section>
		</>
	);
}
export default EditPost;
