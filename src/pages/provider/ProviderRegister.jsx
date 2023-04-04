import React from "react";
import UserRegisterInfo from "../../components/shared/UserRegisterInfo";
import { ButtonContainerStyle, ButtonGenericStyle } from "../../styled-components/index/Button.style";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import ProviderRegisterInfo from "../../components/provider/ProviderRegisterInfo";
import Footer from "../../components/shared/Footer";

const ProviderRegister = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Register Your data</h1>
				<ButtonContainerStyle>
					<ButtonGenericStyle>Sign up with Facebook</ButtonGenericStyle>
					<ButtonGenericStyle>Sign up with Google</ButtonGenericStyle>
				</ButtonContainerStyle>
				<UserRegisterInfo></UserRegisterInfo>
				<ProviderRegisterInfo></ProviderRegisterInfo>
				<ButtonGenericStyle>Register</ButtonGenericStyle>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default ProviderRegister;
