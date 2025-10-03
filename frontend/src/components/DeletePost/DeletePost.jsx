import "./deletePost.css";
import { deletePostApi } from "../../api/posts.js";
import { useState } from "react";

function DeletePost({ postId, token }) {
	const [showOverlay, setShowOverlay] = useState(false);

	async function confirmDelete(postId, token) {
		const response = await deletePostApi(postId, token);

		if (response?.status === 200) {
			window.location.reload();
		}
	}

	return (
		<>
			{!showOverlay && (
				<button onClick={() => setShowOverlay(true)}>Radera inlägg</button>
			)}
			{showOverlay && (
				<section>
					<p>Är du säker på att du vill radera inlägget?</p>
					<button onClick={() => confirmDelete(postId, token)}>
						Ja, radera inlägget
					</button>
					<button onClick={() => setShowOverlay(false)}>Nej, abryt</button>
				</section>
			)}
		</>
	);
}
export default DeletePost;
