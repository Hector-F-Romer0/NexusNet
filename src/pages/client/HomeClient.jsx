import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SideBar from "../../components/shared/SideBar";
import CardCase from "../../components/shared/CardCase";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import { getUserLocalStorage, setUserLocalStorage } from "../../helpers/localStorageManagement";
import { setUser } from "../../store/slices/user/userSlice";

const HomeClient = () => {
	const navigate = useNavigate();
	const { allCases } = useSelector((state) => state.cases);
	const dispatch = useDispatch();

	useEffect(() => {
		const userInfo = getUserLocalStorage();
		setUserLocalStorage(userInfo);
		dispatch(setUser(userInfo));
	}, []);

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className=" text-gray-900 font-semibold">
				<h1 className="text-4xl font-bold text-center mt-9">Welcome to my cases - client</h1>
				<h2></h2>
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
					{allCases.map((caseInfo) =>
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
