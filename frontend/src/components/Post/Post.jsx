import "./post.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditPost from "../EditPost/EditPost.jsx";

function Post({
	text,
	username,
	loggedInUser,
	dateCreated,
	dateUpdated,
	postId,
}) {
	const [showEditForm, setShowEditForm] = useState(false);

	// Kontroll för ifall redigera-knappen syns eller ej
	const canEditPost =
		loggedInUser?.username === username || loggedInUser?.role === "ADMIN";

	return (
		<section className='post'>
			<article className='post__container'>
				{showEditForm ? (
					<EditPost
						text={text}
						username={username}
						postId={postId}
						setShowEditForm={setShowEditForm}
						dateCreated={dateCreated}
						dateUpdated={dateUpdated}
					/>
				) : (
					<>
						{/* Datumet inlägget skapades samt datumet inlägget redigerades (om det redigerats) */}
						<h2 className='post__date-time'>
							<time dateTime={dateCreated}>{dateCreated}</time>
							{dateUpdated && (
								<time dateTime={dateUpdated}>Redigerad: {dateUpdated}</time>
							)}
						</h2>

						{/* Inlägget själv */}
						<p className='post__text'>{text}</p>

						<section className='post__flex-container'>
							{/* Länk till att kolla alla poster av användare */}
							<Link className='post__user-link' to={`/posts-by/${username}`}>
								<b>--- {username}</b>
							</Link>

							{/* Kontroll så bara användaren (eller admin) kan se möjligheten att redigera inlägget */}
							{canEditPost && (
								<button
									className='button-style'
									onClick={() => setShowEditForm(true)}>
									Redigera
								</button>
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
