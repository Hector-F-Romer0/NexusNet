import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SideBar from "../../components/shared/SideBar";
import CardCase from "../../components/shared/CardCase";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import { getUserToken } from "../../helpers/localStorageManagement";
import { getCasesNotCompletedRequest } from "../../services/cases.services";
import Loading from "../../components/shared/Loading";

const HomeClient = () => {
	const [cases, setCases] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const getDataBD = async () => {
			setIsLoading(true);
			const res = await getCasesNotCompletedRequest(getUserToken());
			console.log(res);
			setCases(res);
			setIsLoading(false);
		};
		getDataBD();
	}, []);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full mb-20">
				<h1 className="text-4xl font-bold text-center mt-9">Welcome to my cases - client</h1>
				<div className="flex flex-row justify-center align-middle gap-10 my-7 text-xs md:text-2xl ">
					<button
						onClick={() => navigate("/client/search")}
						className="bg-gray-200 hover:bg-gray-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer ">
						Search providers
					</button>
					<button
						onClick={() => navigate("/client/case/add")}
						className="bg-gray-200 hover:bg-gray-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
						Upload your cases
					</button>
				</div>
				<div className="flex flex-col items-center justify-center flex-wrap gap-11 mb-5">
					{cases.map((caseInfo) =>
						!caseInfo?.completed ? <CardCase key={caseInfo.id} data={caseInfo} /> : ""
					)}
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default HomeClient;
