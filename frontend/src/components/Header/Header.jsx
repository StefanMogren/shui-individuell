import "./header.css";
import HomePageLink from "../HomePageLink/HomePageLink";

function Header({ title, username = "gäst" }) {
	return (
		<header className='header'>
			<HomePageLink />
			{username && (
				<h1 className='home-page__title'>
					{title} {username}
				</h1>
			)}
		</header>
	);
}
export default Header;
