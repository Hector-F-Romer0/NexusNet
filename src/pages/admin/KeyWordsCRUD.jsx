import React from "react";
import { useSelector } from "react-redux";

import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";

const KeyWordsCRUD = () => {
	const { keywords } = useSelector((state) => state.keywords);

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
				<CRUDManagement data={keywords} nameToManage={"Key words"} />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default KeyWordsCRUD;
