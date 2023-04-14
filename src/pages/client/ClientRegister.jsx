import React from "react";
import UserRegisterInfo from "../../components/shared/UserRegisterInfo";
import { ButtonContainerStyle, ButtonGenericStyle } from "../../styled-components/index/Button.style";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";

const ClientRegister = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<h1>Register Your data</h1>
				<ButtonContainerStyle>
					<ButtonGenericStyle>Sign up with Facebook</ButtonGenericStyle>
					<ButtonGenericStyle>Sign up with Google</ButtonGenericStyle>
				</ButtonContainerStyle>
				<UserRegisterInfo></UserRegisterInfo>
				<ButtonGenericStyle>Register</ButtonGenericStyle>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default ClientRegister;
