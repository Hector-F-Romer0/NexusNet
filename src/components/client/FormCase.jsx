import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// ? READ FILES
import keywords from "../../db/keywords.json";
import services from "../../db/services.json";
import categories from "../../db/categories.json";

// import { ButtonStyle } from "../../styled-components/index/Button.style";
import ContainerTagKeywords from "../shared/ContainerTagKeywords";
import DropDownList from "../shared/DropDownList";
import FormInput from "../shared/FormInput";
import TextAreaForm from "../shared/TextAreaForm";
import { postCase } from "../../store/slices/cases/thunks";
import { useNavigate } from "react-router-dom";
import KeyWord from "../shared/KeyWord";
import KeyWordT from "../shared/KeyWordT";

const FormCase = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { user } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const MySwal = withReactContent(Swal);

	const [selectedKeyWord, setSelectedKeyWord] = useState({
		id: 0,
		name: "Select keywords",
	});
	const [selectedService, setSelectedService] = useState({
		id: services[0]?.id,
		name: services[0]?.name,
	});

	const [selectedCategory, setSelectedCategory] = useState({
		id: categories[0]?.id,
		name: categories[0]?.name,
	});

	const [keywordsChosen, setKeyWordsChosen] = useState([]);

	useEffect(() => {
		// Verificar que la keyword ya fue escogida
		const keyWordExists = keywordsChosen.find((keyword) => selectedKeyWord.id === keyword?.id);
		if (keyWordExists !== undefined) {
			MySwal.fire({
				title: "Previously added word",
				icon: "error",
				text: `You already have added the key word ${keyWordExists?.name}. Plesase select another.`,
				confirmButtonColor: "#007BFF",
			});
			return;
		}

		// Filtra el valor por defecto para que nunca se guarde en el estado.
		keywordsChosen.filter((item) => item?.id === 0);
		setKeyWordsChosen([...keywordsChosen, selectedKeyWord]);
	}, [selectedKeyWord]);

	const onSubmit = (data) => {
		if (selectedKeyWord.id === 0 || keywordsChosen.length === 1) {
			MySwal.fire({
				title: "No chosen word",
				icon: "error",
				text: `Choose at least one word to create the case.`,
				confirmButtonColor: "#007BFF",
			});
			return;
		}

		if (keywordsChosen.length === 0) {
			alert("Seleccione al menos 1 keyword.");
			return;
		}

		const newCase = {
			data,
			category: selectedCategory,
			service: selectedService,
			keywords: keywordsChosen.filter((item) => item?.id !== 0),
			userId: user.id,
		};

		dispatch(postCase(newCase));
		navigate("/client/home");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
			{/* <TestDrop /> */}
			<DropDownList
				label="Service requested"
				availableOptions={services}
				selected={selectedService}
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

			<div className=" flex flex-row flex-wrap">
				{keywordsChosen.map(
					(keyword) =>
						keyword?.id !== 0 && (
							<KeyWordT
								key={keyword.id}
								data={keyword}
								keywords={keywordsChosen}
								setKeyWords={setKeyWordsChosen}
								canDelete={true}
							/>
						)
				)}
			</div>
			<div className="flex justify-center">
				<button
					type="submit"
					className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5">
					Upload your case
				</button>
			</div>
		</form>
	);
};

export default FormCase;
