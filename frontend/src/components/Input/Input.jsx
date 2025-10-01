import "./input.css";

function Input({ labelText, inputType, inputName, inputClass }) {
	return (
		<label className='input__label' htmlFor={`${inputName}Id`}>
			{labelText}
			<input
				className={`input__text${inputClass ?? ""}`}
				type={inputType}
				name={inputName}
				id={`${inputName}Id`}
			/>
		</label>
	);
}
export default Input;
