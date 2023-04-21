import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import CardTopProvider from "../../components/shared/CardTopProvider";
import { FiCornerUpLeft, FiThumbsUp, FiMessageCircle, FiTrash2 } from "react-icons/fi";
import { deleteCase } from "../../store/slices/cases/casesSlice";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import KeyWord from "../../components/shared/KeyWord";

const CaseInformation = () => {
	const { id } = useParams();
	const [userCase, setUserCase] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { allCases } = useSelector((state) => state.cases);
	const MySwal = withReactContent(Swal);

	useEffect(() => {
		console.log(id);
		setUserCase(allCases.find((item) => item.id == id));
	}, []);

	const showButtons = () => {
		if (userCase?.takenBy === null) {
			return;
		} else {
			return (
				<>
					<button
						className="flex px-3 py-2 bg-[#1FCE1B] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60"
						onClick={() =>
							navigate(`/client/rate/provider/${userCase.takenBy.id}`, {
								state: { idCase: userCase.id },
							})
						}>
						<FiThumbsUp size={26}></FiThumbsUp> <span className="ml-1">Mark as done</span>
					</button>
					<button
						className="flex px-8 py-2 bg-[#5A8FCC] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60"
						onClick={() => navigate("/client/chats")}>
						<FiMessageCircle size={26}></FiMessageCircle> <span className="ml-1">Chat</span>
					</button>{" "}
				</>
			);
		}
	};

	const handleDeleteCase = async () => {
		dispatch(deleteCase(userCase));
		await MySwal.fire({
			title: "Case deleted successfully",
			icon: "success",
			text: `The case ${userCase.caseTitle} was deleted from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Ok, go home",
		});
		navigate("/client/home");
	};

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="flex flex-col w-full">
				<div className="flex-grow self-center min-w-sm w-4/5 py-5 px-5 md:px-10 rounded-lg shadow bg-card my-7">
					<div className="flex flex-row w-full items-center">
						<FiCornerUpLeft
							className="text-8xl sm:text-6xl md:text-5xl mb-2 mr-3 md:mr-10 cursor-pointer"
							onClick={() => navigate("/client/home")}></FiCornerUpLeft>{" "}
						<h1 className="mb-2 text-3xl font-bold tracking-tight text-black">{userCase?.caseTitle}</h1>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 my-1 mx-1 bg-categoryTag rounded-full text-white">
						{userCase?.category?.label}
					</div>
					<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 my-1 mx-1 bg-serviceTag rounded-full text-white">
						{userCase?.service?.label}
					</div>
					<p className="my-3">{userCase?.caseDescription}</p>
					<div className="flex flex-col sm:flex-row items-center sm:items-start">
						{userCase?.keywords?.map((keyword) => (
							<KeyWord key={keyword.value} data={keyword} />
						))}
					</div>
					<div className="my-1">
						<p className="text-end font-light">
							{userCase?.takenOn ? `Taken on ${userCase?.takenOn}` : "Not assumed"}
						</p>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<h2 className="my-5 text-base md:text-xl font-semibold tracking-tight text-black">Files uploads</h2>
					<h2 className="my-5 text-base md:text-xl font-semibold tracking-tight text-black">Taken by</h2>
					{userCase?.takenBy !== null ? (
						<div className="flex items-center justify-center my-5">
							<CardTopProvider data={userCase?.takenBy} />
						</div>
					) : (
						<h3 className="my-5 text-sm md:text-base font-normal tracking-tight text-black">
							This case has not been taken
						</h3>
					)}
					<div className="flex items-center justify-center flex-col md:flex-row">
						{showButtons()}
						<button
							onClick={() => handleDeleteCase()}
							className="flex px-3 py-2 bg-[#E72E2E] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60 md">
							<FiTrash2 size={26}></FiTrash2>
							<span className="ml-1">Delete Case</span>
						</button>
					</div>
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};
export default CaseInformation;
