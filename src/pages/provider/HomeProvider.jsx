import React from "react";
import CaseContainer from "../../components/shared/CaseContainer";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";
import { useNavigate } from "react-router-dom";

const HomeProvider = () => {
	const navigate = useNavigate();
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full mb-20">
				<div className="flex flex-row justify-evenly mt-12  ">
					<h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[mainTitle]">
						Welcome to your current cases - Provider
					</h1>
					<button
						onClick={() => navigate("/provider/searchcase")}
						className="bg-gray-200 hover:bg-gray-300 text-[#2A4C73] font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer ">
						Search cases
					</button>
				</div>

				<CaseContainer />
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default HomeProvider;
