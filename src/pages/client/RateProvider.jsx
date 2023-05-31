import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import CardRateProvider from "../../components/client/CardRateProvider";
import TextAreaForm from "../../components/shared/TextAreaForm";
import Footer from "../../components/shared/Footer";
import StarRating from "../../components/shared/StarRating";
import { getProviderIdRequest, updateRateRequest } from "../../services/providers.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import { showSuccessModal, showWarningModal } from "../../components/modals/customModals";
import Loading from "../../components/shared/Loading";

const RateProvider = () => {
	const [provider, setProvider] = useState({});
	const [rating, setRating] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const location = useLocation();
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		const getDataBD = async () => {
			setIsLoading(true);
			const res = await getProviderIdRequest(id, getUserToken());
			setProvider(res);
			setIsLoading(false);
		};

		getDataBD();
	}, []);

	const onSubmit = async (data) => {
		const { idCase } = location.state;

		if (rating === 0) {
			await showWarningModal(
				"Please rate the provider",
				"Click the stars in accordance with your experience. This helps us to improve our platform.",
				"Ok"
			);
			return;
		}

		await updateRateRequest(
			id,
			{
				rate: rating,
				comment: data.comment,
				idCase: idCase,
			},
			getUserToken()
		);
		await showSuccessModal(
			"Information sent",
			"Thanks for rate. This helps us to improve our platform",
			"Ok, return to home"
		);
		navigate("/client/home");
	};

	if (isLoading) {
		<Loading />;
	}

	return (
		<div className="bg-white flex justify-center items-center h-screen flex-wrap">
			<div className="bg-card w-9/12 h-fit flex flex-col justify-center px-1 py-10 gap-6 rounded-lg lg:px-10 md:my-0 md:px-6 ">
				<h1 className="mb-2 text-2xl md:text-5xl font-bold tracking-tight text-black text-center">
					Rating provider
				</h1>
				<div className="flex flex-row flex-auto">
					<div className="sm:w-1/4 md:w-1/6 ">
						<img src={provider?.urlImg} alt="Provider photo" className="rounded-lg" />
					</div>
					<div className=" w-3/4 px-10">
						<h2 className="mb-2 text-xl md:text-3xl font-semibold tracking-tight text-black text-left">
							{`${provider?.names} ${provider?.lastnames}`}
						</h2>
						<hr className="h-1 bg-black mb-5 f" />
						<div className="flex justify-center align-middle">
							<StarRating setRating={setRating} />
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextAreaForm
						label="Comments"
						registerName="comment"
						placeholder="His/her job was greatful..."
						register={register}
						validations={{
							minLength: {
								value: 3,
								message: "Comments must be between 3 and 100 characters.",
							},
							maxLength: {
								value: 100,
								message: "Comments must be between 3 and 100 characters.",
							},
						}}
						error={errors.comment}
					/>
					<div className="flex justify-center flex-wrap">
						<button
							type="submit"
							className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 sm:w-auto md:w-1/4">
							Send information
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RateProvider;
