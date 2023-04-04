import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import { ButtonStyle } from "../../styled-components/index/Button.style";
import ContainerTagKeywords from "../shared/ContainerTagKeywords";
import DropDownList from "../shared/DropDownList";
import FormInput from "../shared/FormInput";
import { FormStyle } from "../../styled-components/index/Input.style";
import { ButtonGenericStyle } from "../../styled-components/index/Button.style";

const FormCase = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [selected, setSelected] = useState({
		id: 0,
		name: "Select keywords",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<FormStyle onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					label="Case title"
					type="text"
					registerName="caseTitle"
					placeholder="Problem with css"
					register={register}
					validations={{
						required: {
							value: true,
							message: "Case title is required.",
						},
						minLength: {
							value: 3,
							message: "Case title must be between 3 and 30 characters.",
						},
						maxLength: {
							value: 30,
							message: "Case title must be between 3 and 30 characters.",
						},
					}}
					error={errors.caseTitle}
				/>
				<FormInput
					label="Case Description"
					type="text"
					registerName="caseDescription"
					placeholder="My css don't work correctly..."
					register={register}
					validations={{
						required: {
							value: true,
							message: "Case description is required.",
						},
						minLength: {
							value: 3,
							message: "Case description must be between 3 and 500 characters.",
						},
						maxLength: {
							value: 500,
							message: "Case title must be between 3 and 500 characters.",
						},
					}}
					error={errors.caseDescription}></FormInput>
				<DropDownList selected={selected} setSelected={setSelected}></DropDownList>
				<ContainerTagKeywords></ContainerTagKeywords>
				<ButtonGenericStyle type="submit">Upload your case</ButtonGenericStyle>
			</FormStyle>
		</div>
	);
};

export default FormCase;
