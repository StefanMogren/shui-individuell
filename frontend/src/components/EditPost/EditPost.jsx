import "./editPost.css";
import { useAuthToken } from "../../hooks/useAuthToken.js";
import handleForm from "../../utils/handleForm.js";
import { editPostApi } from "../../api/posts.js";
import DeletePost from "../DeletePost/DeletePost.jsx";

function EditPost({
	text,
	username,
	postId,
	setShowEditForm,
	dateCreated,
	dateUpdated,
}) {
	const { token } = useAuthToken();

	async function editPost(event) {
		const response = await handleForm(event, editPostApi, token);

		if (response?.status === 200) {
			window.location.reload();
		}
	}

	return (
		<>
			<section className='edit-post'>
				<DeletePost
					postId={postId}
					token={token}
					dateCreated={dateCreated}
					dateUpdated={dateUpdated}
				/>
				<form
					className='input__label flex-column'
					action='post'
					onSubmit={editPost}>
					<textarea
						className='input__textarea'
						name='text'
						id='textId'
						rows={10}
						minLength={2}
						maxLength={300}
						defaultValue={text}></textarea>
					<input type='hidden' name='postId' value={postId} />
					<section className='flex-row'>
						<button className='button-style' type='submit'>
							Bekräfta redigering
						</button>
						<button
							type='button'
							className='button-style'
							onClick={() => setShowEditForm(false)}>
							Avbryt
						</button>
					</section>
				</form>
			</section>
			<b>--- {username}</b>
		</>
	);
}
export default EditPost;
