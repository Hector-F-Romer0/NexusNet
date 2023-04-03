import React from "react";
import PropTypes from "prop-types";
import { InputContainerStyle, InputErrorStyle, InputLabelStyle, InputStyle } from "../../styled-components/index";

const FormInput = ({ label, registerName, placeholder, register, type, validations, error }) => {
	return (
		<InputContainerStyle>
			<InputLabelStyle htmlFor={registerName}>{label}</InputLabelStyle>
			<InputStyle type={type} placeholder={placeholder} {...register(registerName, validations)} />
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
