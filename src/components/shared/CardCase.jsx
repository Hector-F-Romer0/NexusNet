import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardCase = ({ data }) => {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);

	const handleNavigate = () => {
		if (user?.type === "client") {
			navigate(`/client/case/${data?.id}`);
		} else {
			navigate(`/provider/case/${data?.id}`);
		}
	};

	return (
		<div
			onClick={() => handleNavigate()}
			className="block min-w-sm w-4/5 pt-5 px-10  rounded-lg shadow bg-card cursor-pointer">
			<div className="flex flex-row gap-5 mb-3 flex-wrap text-sm md:text-xl ">
				<div className="text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-categoryTag rounded-full text-white">
					{data.category?.name}
				</div>
				<div className=" text-sm inline-flex items-center font-bold leading-sm px-7 py-1 bg-serviceTag rounded-full text-white">
					{data.service?.name}
				</div>
			</div>
			<h3 className="mb-2 text-3xl font-bold tracking-tight text-black ">{data?.caseTitle}</h3>
			<hr className="h-1 bg-black mb-5 f" />
			<p className="font-light text-gray-700 text-sm md:text-xl">{data?.caseDescription}</p>
			<h4 className="font-thin text-base text-right text-gray-700 mt-4 pb-2">
				{data.takenOn ? `Taken on ${data.takenOn}` : "Not assumed"}
			</h4>
		</div>
	);
};

export default CardCase;
