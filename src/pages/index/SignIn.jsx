import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { ButtonStyle } from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";

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
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input type="text" {...register("username", { required: true, minLength: 3, maxLeminLength: 18 })} />
				{errors.username && (
					<small>Username is required. This field must be between 3 and 18 characters.</small>
				)}
				<label htmlFor="password">Password</label>
				<input
					type="password"
					{...register("password", { required: true, minLength: 3, maxLeminLength: 18 })}
				/>
				{errors.password && <small>Password is required.</small>}
				<ButtonStyle type="submit">Sign in</ButtonStyle>
			</form>
			<div>
				<ButtonStyle>Sign in with Facebook</ButtonStyle>
				<ButtonStyle>Sign in with Google</ButtonStyle>
			</div>
		</div>
	);
};

export default SignIn;
