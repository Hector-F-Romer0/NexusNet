import React from "react";
import { FiStar } from "react-icons/fi";
import { Rating } from "react-simple-star-rating";

const CardTopProvider = ({ data }) => {
	console.log(data);
	return (
		<div className="flex flex-row gap-2 sm:gap-8 min-w-sm w-3/5 py-8 px-8 rounded-lg justify-between bg-[#D3E5FF] items-center w-full">
			<img className="h-auto w-1/4 rounded-lg" src={data?.urlImg} alt="Provider photo" />
			<h3 className="text-lg font-bold">{`${data?.names} ${data?.lastnames}`}</h3>
			<Rating
				initialValue={data?.rate}
				readonly={true}
				allowFraction={true}
				emptyStyle={{ display: "flex" }}
				fillIcon={<FiStar className="fill-[#FFCB45] text-xs md:text-3xl stroke-none" />}
				emptyIcon={<FiStar className="fill-[#D1D5DB] text-xs md:text-3xl stroke-none" />}
				fillStyle={{ display: "-webkit-inline-box" }}
			/>
			<h3 className="text-lg font-bold">{data?.rate}</h3>
		</div>
	);
};

export default CardTopProvider;
