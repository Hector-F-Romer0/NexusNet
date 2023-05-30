import FormCase from "../../components/client/FormCase";
import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";
import { useState } from "react";

const CaseForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full mb-20">
				<div className="flex-grow self-center w-4/5 py-5 px-4 md:px-10 rounded-lg shadow bg-card my-7">
					<h1 className="text-xl md:text-4xl font-bold text-center mt-9">Case register</h1>
					<FormCase />
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default CaseForm;
