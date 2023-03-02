import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";

import AdminNavBar from "../../components/provider/AdminNavBar";
import Footer from "../../components/shared/Footer";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index";

const ServicesCRUD = () => {
	return (
		<Layout>
			<NavBarLayout>
				<AdminNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<h1>Services</h1>
				<h2>Create, Read, Update and Delete Categories</h2>
				<CRUDManagement />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default ServicesCRUD;
