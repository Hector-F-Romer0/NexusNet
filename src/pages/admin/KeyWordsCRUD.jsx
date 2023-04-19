import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";

const KeyWordsCRUD = () => {
	return (
		<section className="flex">
			<AdminSideBar />
			<div className="w-full">
				<CRUDManagement />
				<Footer />
			</div>
		</section>
	);
};

export default KeyWordsCRUD;
