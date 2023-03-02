import React from "react";
import Logo from "../../assets/logo.png";
import { ButtonStyle } from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";

const SignIn = () => {
	return (
		<div>
			<div>
				<h1>Sign in</h1>
				<ProviderPhotoCard src={Logo}></ProviderPhotoCard>
				<h2>Dont have an account</h2>
				<h2>Sign Up - </h2>
			</div>
			<div>
				<input></input>
				<input></input>
				<ButtonStyle>Sign in</ButtonStyle>
				<ButtonStyle>Sign in with Facebook</ButtonStyle>
				<ButtonStyle>Sign in with Google</ButtonStyle>
			</div>
		</div>
	);
};

export default SignIn;
