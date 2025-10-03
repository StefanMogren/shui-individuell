import "./post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditPost from "../EditPost/EditPost.jsx";

function Post({ text, username, loggedInUser, dateCreated, postId }) {
	const [showEditForm, setShowEditForm] = useState(false);

	// Kontroll för ifall redigera-knappen syns eller ej
	const canEditPost =
		loggedInUser?.username === username || loggedInUser?.role === "ADMIN";

	return (
		<section className='post'>
			<article className='post__container'>
				<h2 className='post__date-time'>
					<time dateTime={dateCreated}>{dateCreated}</time>
				</h2>

				{showEditForm ? (
					<EditPost
						text={text}
						username={username}
						postId={postId}
						setShowEditForm={setShowEditForm}
					/>
				) : (
					<>
						<p className='post__text'>{text}</p>
						<section className='post__flex-container'>
							<Link className='post__user-link' to={`/posts-by/${username}`}>
								<b>--- {username}</b>
							</Link>
							{canEditPost && (
								<button onClick={() => setShowEditForm(true)}>Redigera</button>
							)}
						</section>
					</>
				)}
			</article>

			{/* CSS-magi för att få till en liten triangel under inlägget. */}
			<div className='post__triangle'></div>
		</section>
	);
}
export default Post;
