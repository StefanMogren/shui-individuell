import "./homePage.css";

import { fetchPosts } from "../../api/posts.js";
import { useEffect, useState } from "react";

// ----- Components -----
import Post from "../../components/Post/Post.jsx";
import NewPostBtn from "../../components/NewPostBtn/NewPostBtn.jsx";
import NewPost from "../../components/NewPost/NewPost.jsx";
import startFetching from "../../utils/startFetching.js";
import { useAuthStore } from "../../stores/useAuthStore.js";
import HomePageLink from "../../components/HomePageLink/HomePageLink.jsx";

function HomePage() {
	const [showOverlay, setShowOverlay] = useState(false);
	const [posts, setPosts] = useState(null);
	let runOnce = false;
	const { user } = useAuthStore.getState();

	useEffect(() => {
		if (runOnce) {
			startFetching(fetchPosts, setPosts);
		} else {
			runOnce = true;
		}
	}, []);

	return (
		<section className='page-layout'>
			<section className='home-page__top'>
				<HomePageLink />
				{user && (
					<h1 className='home-page__title'>Välkommen {user.username}!</h1>
				)}
			</section>

			<section className='home-page__posts-container'>
				{posts
					? posts.map((post) => (
							<Post
								text={post.text}
								username={post.username}
								dateCreated={post.dateCreated}
								loggedInUser={user}
								key={post.GSI1SK}
							/>
					  ))
					: "Loading posts..."}
			</section>

			{showOverlay && <NewPost setShowOverlay={setShowOverlay} />}
			<NewPostBtn setShowOverlay={setShowOverlay} showOverlay={showOverlay} />
		</section>
	);
}
export default HomePage;
