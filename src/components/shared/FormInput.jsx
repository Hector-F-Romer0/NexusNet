import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ label, registerName, placeholder, register, type, validations, error }) => {
	return (
		<div className="flex flex-col w-full my-3">
			<label htmlFor={registerName} className="block mb-2 text-base font-semibold text-gray-900">
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				{...register(registerName, validations)}
				className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			/>
			{error?.type === "required" && (
				<span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>
			)}
			{error?.type === "minLength" && (
				<span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>
			)}
			{error?.type === "maxLength" && (
				<span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>
			)}
			{error?.type === "max" && <span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>}
			{error?.type === "min" && <span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>}
			{error?.type === "pattern" && (
				<span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>
			)}
			{error?.type === "validate" && (
				<span className="mt-2 text-sm text-red-600 font-medium">{error?.message}</span>
			)}
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
