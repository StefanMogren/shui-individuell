import "./deletePost.css";
import { deletePostApi } from "../../api/posts.js";
import { useState } from "react";

function DeletePost({ postId, token, dateCreated, dateUpdated }) {
	const [showConfirm, setShowConfirm] = useState(false);

	async function confirmDelete(postId, token) {
		const response = await deletePostApi(postId, token);

		if (response?.status === 200) {
			window.location.reload();
		}
	}

	return (
		<>
			{!showConfirm && (
				<section className='flex-row'>
					<h2 className='post__date-time'>
						<time dateTime={dateCreated}>{dateCreated}</time>
						{dateUpdated && (
							<time dateTime={dateUpdated}>Redigerad: {dateUpdated}</time>
						)}
					</h2>
					<button className='button-style' onClick={() => setShowConfirm(true)}>
						Radera inlägg
					</button>
				</section>
			)}
			{showConfirm && (
				<section className='flex-column'>
					<p className='delete-post__text'>
						Är du säker på att du vill radera inlägget?
					</p>
					<section className='delete-post__button-container'>
						<button
							className='button-style'
							onClick={() => confirmDelete(postId, token)}>
							Ja, radera inlägget
						</button>
						<button
							className='button-style'
							onClick={() => setShowConfirm(false)}>
							Nej, avbryt
						</button>
					</section>
				</section>
			)}
		</>
	);
}
export default DeletePost;
