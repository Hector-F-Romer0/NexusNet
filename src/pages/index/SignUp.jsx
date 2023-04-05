import React from "react";
import Logo from "../../assets/logo.png";
import { Layout, LogoLayout, FormContentLayout } from "../../styled-components/index/sign.style.jsx";
import { ButtonGenericStyle } from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { FormStyle, InputContainerRowStyle } from "../../styled-components/index/Input.style";
import FormInput from "../../components/shared/FormInput";

const SignUp = () => {
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
				<InputContainerRowStyle>
					<ProviderPhotoCard src={Logo}></ProviderPhotoCard>
					<h1>Sign Up</h1>
				</InputContainerRowStyle>
				<InputContainerRowStyle>
					<h3>Already have an account?</h3>
					<ButtonGenericStyle onClick={() => navigate("/signin")}>Sign in</ButtonGenericStyle>
				</InputContainerRowStyle>
				<FormStyle onSubmit={handleSubmit(onSubmit)}>
					<FormInput
						label="Email"
						type="text"
						registerName="email"
						placeholder="Email"
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
					<InputContainerRowStyle>
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
					</InputContainerRowStyle>
					<ButtonGenericStyle>AQUÍ IRÁ LA DROPDOWN LIST</ButtonGenericStyle>
					<ButtonGenericStyle>Sign Up</ButtonGenericStyle>
					<InputContainerRowStyle>
						<ButtonGenericStyle>Sign in with Facebook</ButtonGenericStyle>
						<ButtonGenericStyle>Sign in with Google</ButtonGenericStyle>
					</InputContainerRowStyle>
				</FormStyle>
			</div>
		</div>
	);
};

export default SignUp;
