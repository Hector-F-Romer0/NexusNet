import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
	Layout,
	LogoLayout,
	FormContentLayout,
	CenterCard,
	SignInButtons,
} from "../../styled-components/index/sign.style.jsx";
import Logo from "../../assets/logo.png";
import { ButtonGenericStyle, PrimaryButtonStyle } from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";
import FormInput from "../../components/shared/FormInput";
import { FormStyle } from "../../styled-components/index/Input.style";
import { FlexCenterColumnLayout } from "../../styled-components/index/Layout.js";

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmitSignIn = (data) => {
		console.log(data);
		navigate("/client/home");
	};

	return (
		<CenterCard>
			<Layout>
				<LogoLayout>
					<h1 className="text-1xl font-bold underline">Sign in</h1>
					<ProviderPhotoCard src={Logo}></ProviderPhotoCard>
					<h2>Don't have an account?</h2>
					<ButtonGenericStyle type="button" onClick={() => navigate("/signup")}>
						Sign up
					</ButtonGenericStyle>
				</LogoLayout>
				<FormContentLayout>
					<form action="" onSubmit={handleSubmit(onSubmitSignIn)}>
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
						<PrimaryButtonStyle type="submit">Sign in</PrimaryButtonStyle>
					</form>
					<SignInButtons>
						<ButtonGenericStyle>Sign in with Facebook</ButtonGenericStyle>
						<ButtonGenericStyle>Sign in with Google</ButtonGenericStyle>
					</SignInButtons>
				</FormContentLayout>
			</Layout>
		</CenterCard>
	);
};

export default SignIn;
