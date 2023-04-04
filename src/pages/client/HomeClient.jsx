import React from "react";
import { useNavigate } from "react-router-dom";

import CaseContainer from "../../components/shared/CaseContainer";
import Footer from "../../components/shared/Footer";
import UserNavBar from "../../components/shared/UserNavBar";

import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import { MainTitle } from "../../styled-components/index/Titles";
import { ButtonContainerStyle, ButtonGenericStyle } from "../../styled-components/index/Button.style";

const HomeClient = () => {
	const navigate = useNavigate();

	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<MainTitle>Welcome to my cases - Client</MainTitle>
				<ButtonContainerStyle>
					<ButtonGenericStyle>Search Providers</ButtonGenericStyle>
					<ButtonGenericStyle onClick={() => navigate("/client/case/add")}>
						Upload your cases
					</ButtonGenericStyle>
				</ButtonContainerStyle>
				<CaseContainer />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default HomeClient;
