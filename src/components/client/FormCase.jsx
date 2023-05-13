import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";

import DropDownList from "../shared/DropDownList";
import FormInput from "../shared/FormInput";
import TextAreaForm from "../shared/TextAreaForm";
import KeyWord from "../shared/KeyWord";
import { getCategoriesRequest } from "../../services/categories.services";
import { getServicesRequest } from "../../services/services.services";
import { getKeywordsRequest } from "../../services/keywords.services";
import { postCaseRequest } from "../../services/cases.services";

const FormCase = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { user } = useSelector((state) => state.user);
	const [categories, setCategories] = useState([]);
	const [services, setServices] = useState([]);
	const [keywords, setKeywords] = useState([]);

	const [uploadFile, setUploadFile] = useState("");
	const [cloudinaryImage, setCloudinaryImage] = useState("");

	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);

	const [selectedKeyWord, setSelectedKeyWord] = useState(null);
	const [keywordsChosen, setKeyWordsChosen] = useState([]);

	useEffect(() => {
		//? Cargar categorias, servicios y keywords de la BD
		getDataBD();
	}, []);

	const getDataBD = async () => {
		const categories = await getCategoriesRequest();
		const services = await getServicesRequest();
		const keywords = await getKeywordsRequest();
		// console.log(keywords);
		// console.log(categories);
		setCategories(categories);
		setServices(services);
		setKeywords(keywords);
	};

	useEffect(() => {
		if (selectedKeyWord === null) {
			return;
		}

		if (selectedKeyWord.value === 0) {
			MySwal.fire({
				title: "Must choose a keyword",
				icon: "error",
				text: `The keywords are necessary for our system. Please select at least one.`,
				confirmButtonColor: "#007BFF",
			});
			return;
		}
		const keyWordExists = keywordsChosen.find((keyword) => selectedKeyWord.value === keyword?.value);

		if (keyWordExists) {
			MySwal.fire({
				title: "Previously added word",
				icon: "error",
				text: `You already have added the key word ${keyWordExists?.name}. Plesase select another.`,
				confirmButtonColor: "#007BFF",
			});
			return;
		}
		setKeyWordsChosen([...keywordsChosen, selectedKeyWord]);
	}, [selectedKeyWord]);

	const onSubmit = async (data) => {
		if (selectedKeyWord.value === 0 || keywordsChosen.length === 0) {
			MySwal.fire({
				title: "No chosen word",
				icon: "error",
				text: `Choose at least one word to create the case.`,
				confirmButtonColor: "#007BFF",
			});
			return;
		}

		data.createdBy = "6456d389e145265e62819aae";
		data.keywords = keywordsChosen.map((keyword) => keyword.value);
		// console.log(newCase);
		console.log(data);

		const formData = new FormData();

		formData.append("file", uploadFile);
		formData.append("upload_preset", "your upload preset name");
		console.log(formData);
		console.log(uploadFile);

		// const res = await postCaseRequest(data);
		// console.log(res);
		// const { data, keywords, userId } = caseToCreate;
		// //TODO: Petición a la BD para crear un caso.
		// const caseToAdd = {
		// 	caseTitle: data?.caseTitle,
		// 	caseDescription: data.caseDescription,
		// 	createdBy: userId,
		// 	// createdAt: moment(Date.now()).format("DD/MM/YYYY"),
		// 	takenOn: null,
		// 	takenBy: null,
		// 	completed: false,
		// 	keywords,
		// 	service: data.service,
		// 	category: data.category,
		// 	files: [
		// 		{
		// 			id: 1,
		// 			src: "https://....",
		// 		},
		// 	],
		// };
		// dispatch(postCase(newCase));
		// navigate("/client/home");
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
			<div className="my-3">
				<label htmlFor={"category"} className="block mb-2 text-base font-semibold text-gray-900">
					Categories
				</label>
				<Controller
					control={control}
					name="category"
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<Select onChange={onChange} options={categories} />
					)}></Controller>
			</div>
			<div className="my-3">
				<label htmlFor={"service"} className="block mb-2 text-base font-semibold text-gray-900">
					Services
				</label>
				<Controller
					control={control}
					name="service"
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<Select onChange={onChange} options={services} />
					)}></Controller>
			</div>
			<div className="my-3">
				<label htmlFor={"service"} className="block mb-2 text-base font-semibold text-gray-900">
					Key words
				</label>
				<Controller
					control={control}
					name="keywords"
					rules={{ required: true }}
					render={({ field }) => (
						<Select
							options={keywords}
							value={keywords.find((s) => s.value === field.value)}
							onChange={(selectedOption) => {
								field.onChange(selectedOption.value);
								setSelectedKeyWord(selectedOption);
							}}
						/>
					)}
				/>
			</div>

			<div className=" flex flex-row flex-wrap my-4">
				{keywordsChosen.map(
					(keyword) =>
						keyword?.id !== 0 && (
							<KeyWord
								key={keyword.value}
								data={keyword}
								keywords={keywordsChosen}
								setKeyWords={setKeyWordsChosen}
								canDelete={true}
							/>
						)
				)}
			</div>
			<div>
				<input
					type="file"
					name=""
					id=""
					onChange={(e) => {
						setUploadFile(e.target.files[0]);
					}}
				/>
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
