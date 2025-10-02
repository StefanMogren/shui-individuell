import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----- Pages -----
import HomePage from "../pages/HomePage/HomePage.jsx";
import NoPage from "../pages/NoPage/NoPage.jsx";
import PostsByUserPage from "../pages/PostsByUserPage/PostsByUserPage.jsx";
import Footer from "../components/Footer/Footer.jsx";

// ----- Components -----
import HomePageLink from "../components/HomePageLink/HomePageLink.jsx";

export const Router = () => {
	return (
		<>
			<BrowserRouter>
				{/* <Header /> */}
				<main className='page'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/posts-by/:username' element={<PostsByUserPage />} />

						<Route path='/*' element={<NoPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
};
