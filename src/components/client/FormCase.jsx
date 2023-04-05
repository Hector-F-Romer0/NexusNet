import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// ? READ FILES
import keywords from "../../db/keywords.json";
import services from "../../db/services.json";
import categories from "../../db/categories.json";

// import { ButtonStyle } from "../../styled-components/index/Button.style";
import ContainerTagKeywords from "../shared/ContainerTagKeywords";
import DropDownList from "../shared/DropDownList";
import FormInput from "../shared/FormInput";
import { FormStyle } from "../../styled-components/index/Input.style";
import { ButtonGenericStyle, PrimaryButtonStyle } from "../../styled-components/index/Button.style";
import TextAreaForm from "../shared/TextAreaForm";

// import { saveJSON } from "../../helpers/jsonFileManager";

const FormCase = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [selectedKeyWord, setSelectedKeyWord] = useState({
		id: 0,
		name: "Select keywords",
	});
	const [setectedService, setSelectedService] = useState({
		id: services[0]?.id,
		name: services[0]?.name,
	});

	const [selectedCategory, setSelectedCategory] = useState({
		id: categories[0]?.id,
		name: categories[0]?.name,
	});

	const [keywordsChosen, setKeyWordsChosen] = useState([]);

	useEffect(() => {
		if (selectedKeyWord.id === 0) {
			console.log("No se ha selecionado ninguna keyword.");
			// alert("No se ha selecionado ninguna keyword.");
			return;
		}

		// Verificar que la keyword ya fue escogida
		const keyWordExists = keywordsChosen.find((keyword) => selectedKeyWord.id === keyword?.id);
		if (keyWordExists !== undefined) {
			console.log(`Ya existe ${keyWordExists?.name}`);
			alert(`Ya agregaste la keyword ${keyWordExists?.name}`);
			return;
		}

		// Filtra el valor por defecto para que nunca se guarde en el estado.
		keywordsChosen.filter((item) => item?.id === 0);
		setKeyWordsChosen([...keywordsChosen, selectedKeyWord]);
	}, [selectedKeyWord]);

	const onSubmit = (data) => {
		if (keywordsChosen.length === 0) {
			alert("Seleccione al menos 1 keyword.");
			return;
		}
		console.log({ data, category: selectedCategory, service: setectedService, keywords: keywordsChosen });
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
				<DropDownList
					label="Service requested"
					availableOptions={services}
					selected={setectedService}
					setSelected={setSelectedService}></DropDownList>
				<DropDownList
					label="Associated category"
					availableOptions={categories}
					selected={selectedCategory}
					setSelected={setSelectedCategory}></DropDownList>
				<DropDownList
					label="Key words"
					availableOptions={keywords}
					selected={selectedKeyWord}
					setSelected={setSelectedKeyWord}></DropDownList>

				<ContainerTagKeywords keywords={keywordsChosen} setKeyWords={setKeyWordsChosen} />
				<PrimaryButtonStyle type="submit">Upload your case</PrimaryButtonStyle>
			</FormStyle>
		</div>
	);
};

export default FormCase;
