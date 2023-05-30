import React, { useState } from "react";

import CardAccount from "../../components/shared/CardAccount";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";
import { useState } from "react";

const AccountClient = () => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex-col justify-center items-center">
				<CardAccount></CardAccount>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default AccountClient;
