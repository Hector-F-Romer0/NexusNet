import React, { useEffect, useState } from "react";

import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardTopProvider from "../../components/shared/CardTopProvider";

const CaseInformationClient = () => {
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
					<h1 className="mb-2 text-3xl font-bold tracking-tight text-black">{userCase?.caseTitle}</h1>
					<hr className="h-1 bg-black mb-5 f" />
					<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-categoryTag rounded-full text-white">
						{userCase.category?.name}
					</div>
					<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-serviceTag rounded-full text-white">
						{userCase.service?.name}
					</div>
					<p>{userCase?.caseDescription}</p>
					<div className="flex flex-row justify-between">
						<p>key</p>
						<p>{userCase?.takenOn ? `Taken on ${userCase?.takenOn}` : "Not assumed"}</p>
					</div>
					<hr className="h-1 bg-black mb-5 f" />
					<h2>Files uploads</h2>
					<h2>Taken by</h2>
					<CardTopProvider img={"/src/assets/Provider1.jpg"} />
					<button>Rate provider</button>
					<button>Chat</button>
					<button>Delete case</button>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default CaseInformationClient;
