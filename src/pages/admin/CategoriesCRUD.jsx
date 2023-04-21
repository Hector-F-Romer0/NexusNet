import React from "react";
import { useSelector } from "react-redux";

import CRUDManagement from "../../components/admin/CRUDManagement";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";

const CategoriesCRUD = () => {
	const { categories } = useSelector((state) => state.categories);

	return (
		<section className="flex">
			<ContainerSideBar>
				<AdminSideBar />
			</ContainerSideBar>
			<div className="w-full">
				<CRUDManagement data={categories} />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default CategoriesCRUD;
