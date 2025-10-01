import "./newPostBtn.css";
import { useEffect, useState } from "react";

function NewPostBtn({ setShowOverlay, showOverlay }) {
	const [transition, setTransition] = useState(false);

	return (
		<button className='new-post-btn' onClick={() => setShowOverlay(true)}>
			<img className='new-post-btn__img' src={"/icons/PenIcon.svg"} />
		</button>
	);
}
export default NewPostBtn;
