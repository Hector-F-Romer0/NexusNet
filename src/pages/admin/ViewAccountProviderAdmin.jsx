import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";

const ViewAccountProviderAdmin = () => {
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
				<CardAccount />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default ViewAccountProviderAdmin;
