import "./App.css";
import { Router } from "./router/Router.jsx";
import { initAuth } from "./helpers/initAuth.js";
import React from "react";

function App() {
	React.useEffect(() => {
		initAuth();
	}, []);

	return (
		<>
			<Router />
		</>
	);
}

export default App;
