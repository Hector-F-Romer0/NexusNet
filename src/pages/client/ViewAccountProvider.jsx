import React from "react";
import CardAccount from "../../components/shared/CardAccount";
import { Layout, MainContentLayout, NavBarLayout } from "../../styled-components/index/Layout";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import Loading from "../../components/shared/Loading";

const ViewAccountProvider = () => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full">
				<CardAccount />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default ViewAccountProvider;
