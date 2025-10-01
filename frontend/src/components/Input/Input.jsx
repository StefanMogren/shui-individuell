import "./input.css";

function Input(props) {
	return (
		<label className='label' htmlFor={`${props.inputName}Id`}>
			{props.labelText}
			<input
				className='label__input'
				type={props.inputType}
				name={props.inputName}
				id={`${props.inputName}Id`}
			/>
		</label>
	);
}
export default Input;
