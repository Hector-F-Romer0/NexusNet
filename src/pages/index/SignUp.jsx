import React from "react";
import Logo from "../../assets/logo.png";
import DropDownList from "../../components/shared/DropDownList";
import { ButtonStyle } from "../../styled-components/index/Button.style";
import { ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";

const SignUp = () => {
	return (
		<div>
			<div>
				<ProviderPhotoCard src={Logo}></ProviderPhotoCard>
				<h1>Sign Up</h1>
				<h3>Already have an account?</h3>
				<h3>Sign in</h3>
			</div>
			<div>
				<input></input>
				<div>
					<input></input>
					<input></input>
				</div>
				<DropDownList></DropDownList>
				<ButtonStyle>Sign Up</ButtonStyle>
				<div>
					<ButtonStyle>Sign Up with Facebook</ButtonStyle>
					<ButtonStyle>Sign Up With Google</ButtonStyle>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
