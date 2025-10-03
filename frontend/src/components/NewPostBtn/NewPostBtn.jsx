import "./newPostBtn.css";

function NewPostBtn({ setShowOverlay }) {
	return (
		<button className='new-post-btn' onClick={() => setShowOverlay(true)}>
			<img className='new-post-btn__img' src={"/icons/PenIcon.svg"} />
		</button>
	);
}
export default NewPostBtn;
