import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminNavBar from "../../components/provider/AdminNavBar";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index";

const KeyWordsCRUD = () => {
	return (
		<Layout>
			<NavBarLayout>
				<AdminNavBar />
			</NavBarLayout>
			<MainContentLayout>
				<h1>Key words</h1>
				<h2>Create, Read, Update and Delete Categories</h2>
				<CRUDManagement />
			</MainContentLayout>
		</Layout>
	);
};

export default KeyWordsCRUD;
