import { jwtDecode } from "jwt-decode";
// import { useAuthToken } from "../hooks/useAuthToken.js";
import { useAuthStore } from "../stores/useAuthStore.js";
export function initAuth() {
	// Hämta token från localStorage. Om den inte finns så avbrys initAuth
	// const { token, setToken } = useAuthToken();
	const token = localStorage.getItem("authToken");
	if (!token) return;

	try {
		const decodedToken = jwtDecode(token);

		// Om token är utgången så tas den bort. Avbryt därefter initAuth.
		if (decodedToken.exp * 1000 < Date.now()) {
			// setToken(null);
			localStorage.removeItem("authToken");
			return;
		}

		// Uppdatera useAuthStore med user, role, och token
		// Kan inte använda "const setAuth = useAuthStore()" då useAuthStore() är en hook som bara får anropas inuti React-komponenter
		useAuthStore.getState().setAuth({
			user: {
				username: decodedToken.username,
				role: decodedToken.role,
			},
			token,
		});
	} catch (error) {
		// Om dekodingen av token misslyckas, då inte på grund av att den saknas.
		console.error("Invalid token in localStorage", error);
		localStorage.removeItem("authToken");
	}
}
