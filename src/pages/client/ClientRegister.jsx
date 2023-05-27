import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import FormInput from "../../components/shared/FormInput";
import { FiCornerUpLeft } from "react-icons/fi";
import { postUserRequest } from "../../services/users.services";

const ClientRegister = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const location = useLocation();
	const MySwal = withReactContent(Swal);

	const onSubmit = async (data) => {
		const { userData } = location.state;
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
			urlImg: "/src/assets/Duck.jpg",
		};

		const res = await postUserRequest(newUser);
		console.log(res);

		// ? CREACIÓN DEL USUARIO EN STORE
		await MySwal.fire({
			title: `Welcome to NexusNet ${data?.names} 😎`,
			icon: "success",
			text: "Go to home to and explore all our tools.",
			confirmButtonColor: "#007BFF",
		});

		navigate("/client/home");
	};

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
