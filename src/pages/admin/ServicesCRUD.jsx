import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";

const ServicesCRUD = () => {
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

export default ServicesCRUD;
