import React, { useEffect, useState } from "react";

import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CardTopProvider from "../../components/shared/CardTopProvider";
import { FiCornerUpLeft, FiThumbsUp, FiMessageCircle, FiTrash2 } from "react-icons/fi";

const CaseInformationClient = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const cases = useSelector((state) => state.cases);
	const [userCase, setUserCase] = useState({});

	useEffect(() => {
		console.log(id);
		setUserCase(cases.find((item) => item.id == id));
	}, []);

	return (
		<section className="flex">
			<SideBar />
			<div className="flex flex-col w-full">
				<div className="flex-grow self-center min-w-sm w-4/5 py-5 px-5 md:px-10 rounded-lg shadow bg-card my-7">
					<div className="flex flex-row w-full items-center">
						<FiCornerUpLeft
							className="text-8xl sm:text-6xl md:text-5xl mb-2 mr-3 md:mr-10 cursor-pointer"
							onClick={() => navigate("/client/home")}></FiCornerUpLeft>
						<h1 className="mb-2 text-3xl font-bold tracking-tight text-black">{userCase?.caseTitle}</h1>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 my-1 mx-1 bg-categoryTag rounded-full text-white">
						{userCase.category?.name}
					</div>
					<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 my-1 mx-1 bg-serviceTag rounded-full text-white">
						{userCase.service?.name}
					</div>
					<p className="my-3">{userCase?.caseDescription}</p>
					<div className="flex flex-col sm:flex-row items-center sm:items-start">
						<p className="text-sm items-center text-center font-bold leading-sm py-1 my-1 mx-1 bg-keyTag w-8/12  sm:w-6/12 md:w-3/12 rounded-full text-keywordText">
							key
						</p>
						<p className="text-sm items-center text-center font-bold leading-sm py-1 my-1 mx-1 bg-keyTag w-8/12 sm:w-6/12 md:w-3/12 rounded-full text-keywordText">
							key
						</p>
					</div>
					<div className="my-1">
						<p className="text-end">
							{userCase?.takenOn ? `Taken on ${userCase?.takenOn}` : "Not assumed"}
						</p>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<h2>Files uploads</h2>
					<h2>Taken by</h2>
					<div className="flex items-center justify-center my-5">
						<CardTopProvider img={"/src/assets/Provider1.jpg"} />
					</div>
					<div className="flex items-center justify-center flex-col md:flex-row">
						<button
							className="flex px-3 py-2 bg-[#1FCE1B] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60 md:text-lg"
							onClick={() => navigate(`/client/rate/provider/`)}>
							<FiThumbsUp size={26}></FiThumbsUp>
							<span className="ml-1">Message</span>
						</button>
						<button
							className="flex px-8 py-2 bg-[#5A8FCC] mr-1 text-white font-semibold rounded  justify-center items-center my-1 text-xs w-40 lg:w-60 md:text-lg"
							onClick={() => navigate("/client/chats")}>
							<FiMessageCircle size={26}></FiMessageCircle>
							<span className="ml-1">Chat</span>
						</button>
						<button className="flex px-3 py-2 bg-[#E72E2E] mr-1 text-white font-semibold rounded justify-center items-center my-1 text-xs w-40 lg:w-60 md:text-lg">
							<FiTrash2 size={26}></FiTrash2>
							<span className="ml-1">Delete Case</span>
						</button>
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default CaseInformationClient;
