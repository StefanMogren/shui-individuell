import "./post.css";

function Post() {
	return (
		<>
			<section className='post'>
				<article className='post__article'>
					<h2 className='post__date-time'>
						<time dateTime='2025-09-24 09:24'>Onsdag 24 sept 09:24</time>
					</h2>
					<p>Hej hå, vilken solig dag!</p>
					<section className='post__flex-container'>
						<p>
							<b>--- Någon person</b>
						</p>
						<p>Redigera</p>
					</section>
				</article>
				<div className='post__triangle'></div>
			</section>
			<h1>Component for Post</h1>
			<p>The post itself.</p>
			<p>
				With date, post text, user, and edit button if the logged in user
				matches the post user.
			</p>
		</>
	);
}
export default Post;
