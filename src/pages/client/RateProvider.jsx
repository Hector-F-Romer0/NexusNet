import React from "react";
import { rateProvider } from "../../store/slices/providers/providersSlice";
import { completeCase } from "../../store/slices/cases/casesSlice";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import withReactContent from "sweetalert2-react-content";

import CardRateProvider from "../../components/client/CardRateProvider";
import TextAreaForm from "../../components/shared/TextAreaForm";
import Footer from "../../components/shared/Footer";
import StarRating from "../../components/shared/StarRating";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const RateProvider = () => {
	const { id } = useParams();
	const location = useLocation();
	const provider = useSelector((state) => state.providers.providers.find((p) => p.id === Number(id)));
	const [rating, setRating] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		console.log(provider);

		if (rating === 0) {
			await MySwal.fire({
				title: "Please rate the provider",
				icon: "warning",
				text: "Click the stars in accordance with your experience. This helps us to improve our platform",
				confirmButtonColor: "#007BFF",
			});
			return;
		}

		dispatch(rateProvider({ rate: rating, idProvider: provider.id }));
		dispatch(completeCase(location.state.idCase));
		await MySwal.fire({
			title: "Information sent",
			icon: "success",
			text: "Thanks for rate. This helps us to improve our platform",
			confirmButtonColor: "#007BFF",
		});
		navigate("/client/home");
	};

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
						registerName="providerComment"
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
						error={errors.providerComment}
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
