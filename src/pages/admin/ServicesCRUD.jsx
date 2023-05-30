import React from "react";
import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import { useSelector } from "react-redux";
import Loading from "../../components/shared/Loading";

const ServicesCRUD = () => {
	const { services } = useSelector((state) => state.services);

	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<AdminSideBar />
			</ContainerSideBar>

			<div className="w-full">
				<CRUDManagement data={services} nameToManage={"Services"} />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default ServicesCRUD;
