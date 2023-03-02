import React from "react";
import UserRegisterInfo from "../../components/shared/UserRegisterInfo";
import { ButtonContainerStyle, ButtonStyle } from "../../styled-components/index/Button.style";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import Footer from "../../components/shared/Footer";

const ClientRegister = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Register Your data</h1>
				<ButtonContainerStyle>
					<ButtonStyle>Sign up with Facebook</ButtonStyle>
					<ButtonStyle>Sign up with Google</ButtonStyle>
				</ButtonContainerStyle>
				<UserRegisterInfo></UserRegisterInfo>
				<ButtonStyle>Register</ButtonStyle>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default ClientRegister;
