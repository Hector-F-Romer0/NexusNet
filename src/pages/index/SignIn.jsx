import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { ButtonGenericStyle } from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";
import FormInput from "../../components/shared/FormInput";
import { FormStyle } from "../../styled-components/index/Input.style";

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		navigate("/client/home");
	};

	return (
		<div>
			<div>
				<h1>Sign in</h1>
				<ProviderPhotoCard src={Logo}></ProviderPhotoCard>
				<h2>Dont have an account</h2>
				<h2>Sign Up - </h2>
			</div>
			<FormStyle action="" onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					label="Username"
					type="text"
					registerName="username"
					placeholder="Username"
					register={register}
					validations={{
						required: {
							value: true,
							message: "Username is required.",
						},
						minLength: {
							value: 3,
							message: "Username must be between 3 and 18 characters.",
						},
					}}
					error={errors.username}
				/>
				<FormInput
					label="Password"
					type="password"
					placeholder="Password"
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
				<ButtonGenericStyle type="submit">Sign in</ButtonGenericStyle>
			</FormStyle>
			<div>
				<ButtonGenericStyle>Sign in with Facebook</ButtonGenericStyle>
				<ButtonGenericStyle>Sign in with Google</ButtonGenericStyle>
			</div>
		</div>
	);
};

export default SignIn;
