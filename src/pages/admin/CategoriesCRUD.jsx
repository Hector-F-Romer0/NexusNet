import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";

import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";

const CategoriesCRUD = () => {
	return (
		<section className="flex">
			<div className="relative left-0 top-0">
				<AdminSideBar />
			</div>
			<div className="w-full h-full">
				<CRUDManagement />
				<div className="fixed w-full right-0 bottom-0">
					<Footer />
				</div>
			</div>
		</section>
	);
};

export default CategoriesCRUD;
