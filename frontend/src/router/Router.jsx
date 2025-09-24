import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----- Pages -----
import HomePage from "../pages/HomePage/HomePage.jsx";
import NoPage from "../pages/NoPage/NoPage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import PostsByUserPage from "../pages/PostsByUserPage/PostsByUserPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import Footer from "../components/Footer/Footer.jsx";

export const Router = () => {
	return (
		<>
			<BrowserRouter>
				{/* <Header /> */}
				<main className='page'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/posts-by' element={<PostsByUserPage />} />

						<Route path='/*' element={<NoPage />} />
					</Routes>
				</main>
				<Footer />
				{/* <footer className='footer'></footer> */}
			</BrowserRouter>
		</>
	);
};
