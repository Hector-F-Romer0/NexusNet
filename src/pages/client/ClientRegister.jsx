import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../components/shared/FormInput";
import { FiCornerUpLeft } from "react-icons/fi";

const ClientRegister = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("HolaMundo");
	};

	return (
		<div className="bg-white flex justify-center items-center h-screen flex-wrap">
			<div className="bg-card w-11/12 lg:w-3/4 h-fit flex flex-col px-1 py-10 gap-3 rounded-3xl lg:px-10 md:my-0 md:px-6 overflow-y-visible">
				<div>
					<FiCornerUpLeft size={40} className="flex"></FiCornerUpLeft>
					<h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold text-[##010334]">
						Register your data
					</h1>
				</div>
				<div className="flex items-center justify-center ml-6">
					<form onSubmit={handleSubmit(onSubmit)} className=" w-11/12">
						<div className="flex justify-around flex-col sm:flex-row sm:gap-8">
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
						</div>
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
						<div className="flex justify-around flex-col sm:flex-row sm:gap-8">
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
						</div>
						<div className="flex justify-around flex-col sm:flex-row sm:gap-8">
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
						</div>
						<div className="flex justify-center mt-3">
							<button
								type="submit"
								className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5">
								Upload your case
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ClientRegister;
