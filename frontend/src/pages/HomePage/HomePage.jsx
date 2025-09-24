import "./homePage.css";

// ----- Components -----
import Post from "../../components/Post/Post.jsx";

function HomePage() {
	return (
		<>
			<h1>Title for HomePage</h1>
			<Post />
			<p>
				With a list of post-compoments, filter option, scrollable list, and new
				post-button
			</p>
			<p>
				Checks the header if a user is logged in. If not, redirect to login
				page. If yes, API fetch posts and render the home page.
			</p>
		</>
	);
}
export default HomePage;
