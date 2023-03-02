import React from "react";
import AdminNavBar from "../../components/provider/AdminNavBar";
import ContainerProvider from "../../components/shared/ContainerProvider";
import { Layout, MainContentLayout } from "../../styled-components/index/Layout";

const HomeAdmin = () => {
	return (
		<Layout>
			<AdminNavBar />
			<MainContentLayout>
				<ContainerProvider />
			</MainContentLayout>
		</Layout>
	);
};

export default HomeAdmin;
