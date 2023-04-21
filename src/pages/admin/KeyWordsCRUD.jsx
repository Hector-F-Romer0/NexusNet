import React from "react";
import { useSelector } from "react-redux";

import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";

const KeyWordsCRUD = () => {
	const { keywords } = useSelector((state) => state.keywords);

	return (
		<section className="flex">
			<ContainerSideBar>
				<AdminSideBar />
			</ContainerSideBar>
			<div className="w-full">
				<CRUDManagement data={keywords} />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default KeyWordsCRUD;
