import "./postsByUserPage.css";
import { fetchPostsByUser } from "../../api/posts.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post.jsx";
import startFetching from "../../utils/startFetching.js";
import HomePageLink from "../../components/HomePageLink/HomePageLink.jsx";
import Header from "../../components/Header/Header.jsx";

function PostsByUserPage() {
	const [posts, setPosts] = useState(null);
	const { username } = useParams();

	let runOnce = false;

	useEffect(() => {
		if (runOnce) {
			startFetching(fetchPostsByUser, setPosts, username);
		} else {
			runOnce = true;
		}
	}, []);

	return (
		<>
			<Header title='Inlägg av' username={username} />
			<main className='page'>
				<section className='page-layout'>
					{posts
						? posts.map((post) => (
								<Post
									text={post.text}
									username={post.username}
									dateCreated={post.dateCreated}
									key={post.GSI1SK}
								/>
						  ))
						: "Loading posts..."}
				</section>
			</main>
		</>
	);
}
export default PostsByUserPage;
