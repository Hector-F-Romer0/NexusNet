import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardContainerStyle } from "../../styled-components/index/CardCase.style";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";
import { getCasesTakenRequest } from "../../services/cases.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import CardCase from "../../components/shared/CardCase";

const HomeProvider = () => {
	const [cases, setCases] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
		const getDataBD = async () => {
			setIsLoading(true);
			const res = await getCasesTakenRequest(getUserToken());
			console.log(res);
			setCases(res);
			setIsLoading(false);
		};

		getDataBD();
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

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
				<CardContainerStyle>
					{cases?.map((caseInformation) => (
						<CardCase key={caseInformation.id} data={caseInformation} />
					))}
				</CardContainerStyle>
				{/* <CaseContainer /> */}
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default HomeProvider;
