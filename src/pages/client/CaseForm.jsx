import React from "react";
import FormCase from "../../components/client/FormCase";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";

const CaseForm = () => {
	return (
		<Layout>
			<SideBar />
			<MainContentLayout>
				<h1>Case Register</h1>
				<FormCase></FormCase>
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default CaseForm;
