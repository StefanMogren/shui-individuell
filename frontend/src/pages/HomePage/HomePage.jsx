import "./homePage.css";

import { fetchPosts } from "../../api/posts.js";
import { useEffect, useState } from "react";

// ----- Components -----
import Post from "../../components/Post/Post.jsx";
import NewPostBtn from "../../components/NewPostBtn/NewPostBtn.jsx";

function HomePage() {
	const [posts, setPosts] = useState(null);
	let runOnce = false;

	useEffect(() => {
		async function startFetching() {
			const response = await fetchPosts();
			if (response) {
				response.sort((a, b) => a.dateCreated.localeCompare(b.dateCreated));
				response.reverse();
				setPosts(response);
			}
		}
		if (runOnce) {
			startFetching();
		} else {
			runOnce = true;
		}
	}, []);

	console.log(posts);

	return (
		<>
			<h1>Title for HomePage</h1>
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
			<p>
				With a list of post-compoments, filter option, scrollable list, and new
				post-button
			</p>
			<p>
				Checks the header if a user is logged in. If not, redirect to login
				page. If yes, API fetch posts and render the home page.
			</p>
			<NewPostBtn />
		</>
	);
}
export default HomePage;
