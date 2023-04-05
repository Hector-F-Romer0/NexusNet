import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import { ButtonStyle } from "../../styled-components/index/Button.style";
import ContainerTagKeywords from "../shared/ContainerTagKeywords";
import DropDownList from "../shared/DropDownList";
import FormInput from "../shared/FormInput";
import { FormStyle } from "../../styled-components/index/Input.style";
import { ButtonGenericStyle, PrimaryButtonStyle } from "../../styled-components/index/Button.style";
import TextAreaForm from "../shared/TextAreaForm";
import { useEffect } from "react";
// import { saveJSON } from "../../helpers/jsonFileManager";

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

	const [keywords, setKeyWords] = useState([]);

	useEffect(() => {
		if (selected.id === 0) {
			console.log("No se ha selecionado ninguna keyword.");
			// alert("No se ha selecionado ninguna keyword.");
			return;
		}

		// Verificar que la keyword ya fue escogida
		const keyWordExists = keywords.find((keyword) => selected.id === keyword?.id);
		if (keyWordExists !== undefined) {
			console.log(`Ya existe ${keyWordExists?.name}`);
			alert(`Ya agregaste la keyword ${keyWordExists?.name}`);
			return;
		}

		// Filtra el valor por defecto para que nunca se guarde en el estado.
		keywords.filter((item) => item?.id === 0);
		setKeyWords([...keywords, selected]);
	}, [selected]);

	const onSubmit = (data) => {
		if (keywords.length === 0) {
			alert("Seleccione al menos 1 keyword.");
			return;
		}
		console.log({ data, keywords: keywords });
		// saveJSON({ data, keywords: keywords });
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
				<TextAreaForm
					label="Case description"
					registerName="caseDescription"
					placeholder="Problem with css..."
					register={register}
					validations={{
						required: {
							value: true,
							message: "Case description is required.",
						},
						minLength: {
							value: 3,
							message: "Case description must be between 3 and 30 characters.",
						},
						maxLength: {
							value: 500,
							message: "Case description must be between 3 and 500 characters.",
						},
					}}
					error={errors.caseDescription}
				/>
				<DropDownList label="Key words" selected={selected} setSelected={setSelected}></DropDownList>
				<ContainerTagKeywords keywords={keywords} setKeyWords={setKeyWords} />
				<PrimaryButtonStyle type="submit">Upload your case</PrimaryButtonStyle>
			</FormStyle>
		</div>
	);
};

export default FormCase;
