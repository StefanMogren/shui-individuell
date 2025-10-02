import "./post.css";
import { Link } from "react-router-dom";

function Post({ text, username, loggedInUser, dateCreated }) {
	// Kontroll för ifall redigera-knappen syns eller ej
	const canEditPost =
		loggedInUser?.username === username || loggedInUser?.role === "ADMIN";

	return (
		<section className='post'>
			<article className='post__container'>
				<h2 className='post__date-time'>
					<time dateTime={dateCreated}>{dateCreated}</time>
				</h2>

				<p>{text}</p>

				<section className='post__flex-container'>
					<Link className='post__user-link' to={`/posts-by/${username}`}>
						<b>--- {username}</b>
					</Link>
					{canEditPost && <p>Redigera</p>}
				</section>
			</article>

			{/* CSS-magi för att få till en liten triangel under inlägget. */}
			<div className='post__triangle'></div>
		</section>
	);
}
export default Post;
