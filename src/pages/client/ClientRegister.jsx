import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import FormInput from "../../components/shared/FormInput";
import { FiCornerUpLeft } from "react-icons/fi";
import { postUserRequest } from "../../services/users.services";
import Loading from "../../components/shared/Loading";
import { getUserToken } from "../../helpers/localStorageManagement";

const ClientRegister = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const location = useLocation();
	const MySwal = withReactContent(Swal);
	const [isLoading, setIsLoading] = useState(false);

	const [uploadImage, setUploadImage] = useState("");
	const [loading, setLoading] = useState("");

	const inputRef = useRef(null);
	const uploadFile = async (e) => {
		const files = inputRef.current.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "perfilPhoto");
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/dhjcunqwa/image/upload", {
			method: "POST",
			body: data,
		});
		const file = await res.json();
		setUploadImage(file.secure_url);
		setLoading(false);
		return file.secure_url;
	};

	const onSubmit = async (data) => {
		const resCloud = await uploadFile();
		console.log(resCloud);
		const { userData } = location.state;
		console.log(userData);
		const newUser = {
			names: data?.names,
			lastnames: data?.lastnames,
			username: data?.username,
			email: userData?.email,
			password: userData?.password,
			role: userData.role.value,
			phoneNumber: data?.phoneNumber,
			country: data?.country,
			state: data?.state,
			city: data?.city,
			urlImg: resCloud,
		};

		const { token } = await postUserRequest(newUser, getUserToken());
		localStorage.setItem("auth-token", JSON.stringify(token));
		// console.log(res);

		// ? CREACIÓN DEL USUARIO EN STORE
		await MySwal.fire({
			title: `Welcome to NexusNet ${data?.names} 😎`,
			icon: "success",
			text: "Go to home to and explore all our tools.",
			confirmButtonColor: "#007BFF",
		});

		navigate("/client/home");
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="bg-white flex justify-center items-center flex-wrap h-screen">
			<div className="flex w-11/12 justify-center items-center py-10">
				<div className="bg-card lg:w-3/4 flex flex-col px-1 py-10 gap-3 rounded-3xl lg:px-10 md:my-0 md:px-6 overflow-y-visible">
					<div>
						<FiCornerUpLeft size={40} onClick={() => navigate("/signup")} className="flex cursor-pointer" />
						<h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[##010334]">
							Register your data
						</h1>
					</div>
					<div className="flex items-center justify-center ml-6">
						<form onSubmit={handleSubmit(onSubmit)} className=" w-11/12">
							<div className="flex justify-around flex-col sm:flex-row sm:gap-8">
								<FormInput
									label="Names"
									type="text"
									registerName="names"
									register={register}
									validations={{
										required: {
											value: true,
											message: "Names is required.",
										},
										minLength: {
											value: 3,
											message: "Names must be between 3 and 30 characters.",
										},
										maxLength: {
											value: 30,
											message: "Names must be between 3 and 30 characters.",
										},
									}}
									error={errors.names}
								/>
								<FormInput
									label="Last names"
									type="text"
									registerName="lastnames"
									register={register}
									validations={{
										required: {
											value: true,
											message: "Last names is required.",
										},
										minLength: {
											value: 3,
											message: "Last names must be between 3 and 30 characters.",
										},
										maxLength: {
											value: 30,
											message: "Last names must be between 3 and 30 characters.",
										},
									}}
									error={errors.lastnames}
								/>
							</div>
							<FormInput
								label="Username"
								type="text"
								registerName="username"
								register={register}
								validations={{
									required: {
										value: true,
										message: "Username is required.",
									},
									minLength: {
										value: 3,
										message: "Username must be between 3 and 15 characters.",
									},
									maxLength: {
										value: 15,
										message: "Username must be between 3 and 15 characters.",
									},
								}}
								error={errors.username}
							/>
							<div className="flex justify-around flex-col sm:flex-row sm:gap-8">
								<FormInput
									label="Phone number"
									type="number"
									registerName="phoneNumber"
									register={register}
									validations={{
										required: {
											value: true,
											message: "Phone number is required.",
										},
										minLength: {
											value: 10,
											message: "Phone number must be 10 characters.",
										},
										maxLength: {
											value: 10,
											message: "Phone number must be 10 characters.",
										},
									}}
									error={errors.phoneNumber}
								/>
								<FormInput
									label="Country"
									type="text"
									registerName="country"
									register={register}
									validations={{
										required: {
											value: true,
											message: "Country is required.",
										},
										minLength: {
											value: 3,
											message: "Country must be between 3 and 30 characters.",
										},
										maxLength: {
											value: 30,
											message: "Country must be between 3 and 30 characters.",
										},
									}}
									error={errors.country}
								/>
							</div>
							<div className="flex justify-around flex-col sm:flex-row sm:gap-8">
								<FormInput
									label="State"
									type="text"
									registerName="state"
									register={register}
									validations={{
										required: {
											value: true,
											message: "State is required.",
										},
										minLength: {
											value: 3,
											message: "State must be between 3 and 30 characters.",
										},
										maxLength: {
											value: 30,
											message: "State must be between 3 and 30 characters.",
										},
									}}
									error={errors.state}
								/>
								<FormInput
									label="City"
									type="text"
									registerName="city"
									register={register}
									validations={{
										required: {
											value: true,
											message: "City is required.",
										},
										minLength: {
											value: 3,
											message: "City must be between 3 and 30 characters.",
										},
										maxLength: {
											value: 30,
											message: "City must be between 3 and 30 characters.",
										},
									}}
									error={errors.city}
								/>
							</div>
							<div className="p-8 flex flex-col justify-center items-center">
								<h1 className="font-montserrat font-medium text-lg">Selecciona tu foto de perfil</h1>
								<div className="w-full md:w-1/2 relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
									<div className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
										<label
											className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
											htmlFor="restaurantImage">
											Select image
											<input
												id="restaurantImage"
												className="text-sm cursor-pointer w-36 hidden"
												type="file"
												ref={inputRef}
											/>
										</label>
										<button className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
											remove image
										</button>
									</div>
									<div className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
										<span className="text-gray-400 opacity-75">
											<svg
												className="w-14 h-14"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="0.7"
												stroke="currentColor">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="flex justify-center mt-3">
								<button
									type="submit"
									className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 w-60">
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientRegister;
