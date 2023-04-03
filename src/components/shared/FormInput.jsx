import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ label, registerName, placeholder, register, type, validations, error }) => {
	return (
		<div>
			<label htmlFor={registerName}>{label}</label>
			<input type={type} placeholder={placeholder} {...register(registerName, validations)} />
			{error?.type === "required" && <span>{error?.message}</span>}
			{error?.type === "minLength" && <span>{error?.message}</span>}
			{error?.type === "maxLength" && <span>{error?.message}</span>}
			{error?.type === "max" && <span>{error?.message}</span>}
			{error?.type === "min" && <span>{error?.message}</span>}
			{error?.type === "pattern" && <span>{error?.message}</span>}
			{error?.type === "validate" && <span>{error?.message}</span>}
		</div>
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
