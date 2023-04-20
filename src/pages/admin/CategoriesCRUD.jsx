import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";

const CategoriesCRUD = () => {
	return (
		<section className="flex">
			<ContainerSideBar>
				<AdminSideBar />
			</ContainerSideBar>
			<div className="w-full">
				<CRUDManagement />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default CategoriesCRUD;
