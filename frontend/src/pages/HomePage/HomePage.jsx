import "./homePage.css";

import { fetchPosts } from "../../api/posts.js";
import { useEffect, useState } from "react";

// ----- Components -----
import Post from "../../components/Post/Post.jsx";
import NewPostBtn from "../../components/NewPostBtn/NewPostBtn.jsx";
import NewPost from "../../components/NewPost/NewPost.jsx";
import startFetching from "../../utils/startFetching.js";

function HomePage() {
	const [showOverlay, setShowOverlay] = useState(false);
	const [posts, setPosts] = useState(null);
	let runOnce = false;

	useEffect(() => {
		if (runOnce) {
			startFetching(fetchPosts, setPosts);
		} else {
			runOnce = true;
		}
	}, []);

	return (
		<>
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
			{showOverlay && <NewPost setShowOverlay={setShowOverlay} />}
			<NewPostBtn setShowOverlay={setShowOverlay} showOverlay={showOverlay} />
		</>
	);
}
export default HomePage;
