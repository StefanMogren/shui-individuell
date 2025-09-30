import "./post.css";

function Post({ text, username, dateCreated }) {
	return (
		<>
			<section className='post'>
				<article className='post__article'>
					<h2 className='post__date-time'>
						<time dateTime={dateCreated}>{dateCreated}</time>
					</h2>
					<p>{text}</p>
					<section className='post__flex-container'>
						<p>
							<b>--- {username}</b>
						</p>
						<p>Redigera</p>
					</section>
				</article>
				<div className='post__triangle'></div>
			</section>
		</>
	);
}
export default Post;
