import React from "react";
import AdminSideBar from "../../components/admin/AdminSideBar";
import ContainerProvider from "../../components/shared/ContainerProvider";
import Footer from "../../components/shared/Footer";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const HomeAdmin = () => {
	return (
		<Layout>
			<AdminSideBar />
			<MainContentLayout>
				<ContainerProvider />
				<Footer />
			</MainContentLayout>
		</Layout>
	);
};

export default HomeAdmin;
