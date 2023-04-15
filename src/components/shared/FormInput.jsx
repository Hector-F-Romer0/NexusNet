import React from "react";
import PropTypes from "prop-types";
import { InputContainerStyle, InputErrorStyle } from "../../styled-components/index/Input.style";

const FormInput = ({ label, registerName, placeholder, register, type, validations, error }) => {
	return (
		<InputContainerStyle>
			<label htmlFor={registerName} className="block mb-2 text-base font-semibold text-gray-900">
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				{...register(registerName, validations)}
				className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

FormInput.propTypes = {
	label: PropTypes.string,
	registerName: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	register: PropTypes.func.isRequired,
	validations: PropTypes.object,
};

FormInput.defaultProps = {
	type: "text",
	placeholder: "",
	validations: {},
};

export default FormInput;
