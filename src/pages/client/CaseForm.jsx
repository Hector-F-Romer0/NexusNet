import React from "react";
import FormCase from "../../components/client/FormCase";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";
import Footer from "../../components/shared/Footer";

const CaseForm = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Case Register</h1>
				<FormCase></FormCase>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default CaseForm;
