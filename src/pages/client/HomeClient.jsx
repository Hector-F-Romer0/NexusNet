import React from "react";
import CaseContainer from "../../components/shared/CaseContainer";
import Footer from "../../components/shared/Footer";
import UserNavBar from "../../components/shared/UserNavBar";

import { ButtonContainerStyle, ButtonStyle } from "../../styled-components/index/Button.style";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import { MainTitle } from "../../styled-components/index/Titles";

const HomeClient = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<MainTitle>Welcome to my cases - Client</MainTitle>
				<ButtonContainerStyle>
					<ButtonStyle>Search Providers</ButtonStyle>
					<ButtonStyle>Upload your cases</ButtonStyle>
				</ButtonContainerStyle>
				<CaseContainer />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default HomeClient;
