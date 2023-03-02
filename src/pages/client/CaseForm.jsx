import React from "react";
import FormCase from "../../components/client/FormCase";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import UserNavBar from "../../components/shared/UserNavBar";

const CaseForm = () => {
	return (
		<Layout>
			<UserNavBar />
			<MainContentLayout>
				<h1>Case Register</h1>
				<FormCase></FormCase>
			</MainContentLayout>
		</Layout>
	);
};

export default CaseForm;
