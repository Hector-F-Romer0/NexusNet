import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Layout, LogoLayout, FormContentLayout, CenterCard } from "../../styled-components/index/sign.style.jsx";
import {
	ButtonContainerStyle,
	ButtonGenericStyle,
	PrimaryButtonStyle,
} from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { FormStyle, InputContainerRowStyle } from "../../styled-components/index/Input.style";
import FormInput from "../../components/shared/FormInput";
import {
	ButtonSubmitLayoutStyle,
	FormSignUpStyle,
	HeaderSignUpStyle,
	LayoutSignUpStyle,
} from "../../styled-components/index/SignUp.style";
import DropDownList from "../../components/shared/DropDownList";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [typeUser, setTypeUser] = useState({ id: 1, name: "User" });

	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		navigate("/client/home");
	};

	return (
		<CenterCard>
			<LayoutSignUpStyle>
				<HeaderSignUpStyle>
					<div>
						<img src={Logo}></img>
						<h1>Sign Up</h1>
					</div>
					<div>
						<h2>Already have an account?</h2>
						<ButtonGenericStyle onClick={() => navigate("/signin")}>Sign in</ButtonGenericStyle>
					</div>
				</HeaderSignUpStyle>
				<FormSignUpStyle onSubmit={handleSubmit(onSubmit)}>
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
				</FormSignUpStyle>
				<ButtonSubmitLayoutStyle>
					<DropDownList
						label="User type"
						availableOptions={[
							{ id: 1, name: "User" },
							{ id: 2, name: "Provider" },
						]}
						selected={typeUser}
						setSelected={setTypeUser}></DropDownList>
					<PrimaryButtonStyle>Sign Up</PrimaryButtonStyle>
					<ButtonGenericStyle>Sign in with Facebook</ButtonGenericStyle>
					<ButtonGenericStyle>Sign in with Google</ButtonGenericStyle>
				</ButtonSubmitLayoutStyle>
			</LayoutSignUpStyle>
			<div>
				<InputContainerRowStyle></InputContainerRowStyle>
			</div>
		</CenterCard>
	);
};

export default SignUp;
