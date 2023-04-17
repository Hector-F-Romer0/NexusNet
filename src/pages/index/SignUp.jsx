import React, { useState } from "react";

import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import FormInput from "../../components/shared/FormInput";
import DropDownList from "../../components/shared/DropDownList";
import FacebookButton from "../../components/shared/FacebookButton";
import GoogleButton from "../../components/shared/GoogleButton";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [typeUser, setTypeUser] = useState({ id: 1, name: "User" });

	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log({ data, typeUser });
		// console.log(typeUser);
		// navigate("/client/home");
	};

	return (
		<div className="bg-white flex justify-center items-center h-screen flex-wrap">
			<div className="bg-card w-11/12 lg:w-3/4 h-fit flex flex-col justify-center px-1 py-10 gap-6 rounded-lg lg:px-10 md:my-0 md:px-6 overflow-y-visible">
				<div className="flex flex-col items-center justify-center flex-wrap lg:flex-row">
					<div className="flex flex-row items-center justify-center">
						<img src={Logo} alt="NexusNet logo" className="w-2/12" />
						<h1 className=" text-2xl font-bold text-left pl-5 md:text-4xl">Sign Up</h1>
					</div>
					<div className="flex flex-col items-center gap-5 lg:flex-row">
						<h2 className="text-md  font-normal text-center my-5 lg:text-base">Don't have an account?</h2>
						<span
							onClick={() => navigate("/signin")}
							className="text-blue-700 text-base font-semibold text-center block mx-auto cursor-pointer hover:text-blue-950">
							Sign In
						</span>
					</div>
				</div>
				<div className="px-12">
					<form action="" onSubmit={handleSubmit(onSubmit)}>
						<FormInput
							label="Email"
							type="email"
							registerName="email"
							placeholder="email@example.com"
							register={register}
							validations={{
								required: {
									value: true,
									message: "Email is required.",
								},
								minLength: {
									value: 3,
									message: "Email must be between 3 and 18 characters.",
								},
							}}
							error={errors.email}
						/>
						<div className="flex flex-col justify-around gap-0 md:flex-row md:gap-7">
							<FormInput
								label="Password"
								type="password"
								registerName="password"
								register={register}
								validations={{
									required: {
										value: true,
										message: "Password is required.",
									},
								}}
								error={errors.password}
							/>
							<FormInput
								label="Confirm password"
								type="password"
								registerName="confirmationPassword"
								register={register}
								validations={{
									required: {
										value: true,
										message: "Password is required.",
									},
								}}
								error={errors.confirmationPassword}
							/>
						</div>
						<DropDownList
							label="User type"
							availableOptions={[
								{ id: 1, name: "User" },
								{ id: 2, name: "Provider" },
							]}
							selected={typeUser}
							setSelected={setTypeUser}></DropDownList>
						<div className="flex justify-center">
							<button
								type="submit"
								className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 w-2/4">
								Sign in
							</button>
						</div>
					</form>
					<div className="flex flex-col mt-10">
						<GoogleButton />
						<FacebookButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
