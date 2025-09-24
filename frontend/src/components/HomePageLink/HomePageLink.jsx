import { Link } from "react-router-dom";
import "./homePageLink.css";

function HomePageLink() {
	return (
		<Link to={"/"} className='homepage-link'>
			<img
				className='homepage-link__logo-img'
				src='/logo/logo.svg'
				alt='Shui logo'
			/>
		</Link>
	);
}
export default HomePageLink;
