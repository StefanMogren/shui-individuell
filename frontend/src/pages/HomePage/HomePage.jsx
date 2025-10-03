import "./homePage.css";

import { fetchPosts } from "../../api/posts.js";
import { useEffect, useState } from "react";

// ----- Components -----
import Post from "../../components/Post/Post.jsx";
import NewPostBtn from "../../components/NewPostBtn/NewPostBtn.jsx";
import NewPost from "../../components/NewPost/NewPost.jsx";
import startFetching from "../../utils/startFetching.js";
import { useAuthStore } from "../../stores/useAuthStore.js";
import Header from "../../components/Header/Header.jsx";

function HomePage() {
	const [showOverlay, setShowOverlay] = useState(false);
	const [posts, setPosts] = useState(null);
	const { user } = useAuthStore.getState();

	useEffect(() => {
		startFetching(fetchPosts, setPosts);
	}, []);

	return (
		<>
			<Header title='Välkommen' username={user?.username} />
			<main className='page'>
				<section className='page-layout'>
					<section className='home-page__posts-container'>
						{posts
							? posts.map((post) => (
									<Post
										text={post.text}
										username={post.username}
										dateCreated={post.dateCreated}
										dateUpdated={post?.dateUpdated}
										loggedInUser={user}
										key={post.GSI1SK}
										postId={post.GSI1SK}
									/>
							  ))
							: "Loading posts..."}
					</section>

					<NewPostBtn
						setShowOverlay={setShowOverlay}
						showOverlay={showOverlay}
					/>
					{showOverlay && <NewPost setShowOverlay={setShowOverlay} />}
				</section>
			</main>
		</>
	);
}
export default HomePage;
