import React from "react";
import PropTypes from "prop-types";
import { InputContainerStyle, InputErrorStyle } from "../../styled-components/index/Input.style";

const TextAreaForm = ({ label, registerName, placeholder, register, validations, error }) => {
	return (
		<InputContainerStyle>
			<label htmlFor={registerName} className="block mb-2 text-base font-semibold text-gray-900">
				{label}
			</label>
			<textarea
				placeholder={placeholder}
				{...register(registerName, validations)}
				className="block p-2.5 h-56 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 resize-none focus:ring-blue-500 focus:border-blue-500"
			/>
			{error?.type === "required" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
			{error?.type === "minLength" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
			{error?.type === "maxLength" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
			{error?.type === "max" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
			{error?.type === "min" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
			{error?.type === "pattern" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
			{error?.type === "validate" && <InputErrorStyle>{error?.message}</InputErrorStyle>}
		</InputContainerStyle>
	);
};

TextAreaForm.propTypes = {
	label: PropTypes.string,
	registerName: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	register: PropTypes.func.isRequired,
	validations: PropTypes.object,
};

TextAreaForm.defaultProps = {
	type: "text",
	placeholder: "",
	validations: {},
};

export default TextAreaForm;
