import "./post.css";
import { Link } from "react-router-dom";

function Post({ text, username, dateCreated }) {
	return (
		<>
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
						<p>Redigera</p>
					</section>
				</article>
				<div className='post__triangle'></div>
			</section>
		</>
	);
}
export default Post;
