import React from "react";
import CaseContainer from "../../components/shared/CaseContainer";
import UserNavBar from "../../components/shared/UserNavBar";
import { ButtonContainerStyle, ButtonStyle } from "../../styled-components/index/Button.style";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const HomeClient = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Welcome to my cases - Client</h1>
				<ButtonContainerStyle>
					<ButtonStyle>Search Providers</ButtonStyle>
					<ButtonStyle>Upload your cases</ButtonStyle>
				</ButtonContainerStyle>
				<CaseContainer />
			</MainContentLayout>
		</Layout>
	);
};

export default HomeClient;
