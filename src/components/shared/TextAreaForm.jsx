import React from "react";
import PropTypes from "prop-types";
import {
	InputContainerStyle,
	InputErrorStyle,
	InputLabelStyle,
	InputStyle,
	TextAreaStyle,
} from "../../styled-components/index/Input.style";

const TextAreaForm = ({ label, registerName, placeholder, register, type, validations, error }) => {
	return (
		<InputContainerStyle>
			<InputLabelStyle htmlFor={registerName}>{label}</InputLabelStyle>
			<TextAreaStyle placeholder={placeholder} {...register(registerName, validations)} />
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
