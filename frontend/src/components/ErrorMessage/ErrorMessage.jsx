import "./errorMessage.css";

import { useClickOutside } from "../../hooks/useClickOutside.js";
function ErrorMessage({ setShowError, text }) {
	const ref = useClickOutside(() => {
		setShowError(false);
	});

	return (
		<p ref={ref} className='error-message__text'>
			{text}
		</p>
	);
}

export default ErrorMessage;
