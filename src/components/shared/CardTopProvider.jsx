import React from "react";

const CardTopProvider = ({ data }) => {
	return (
		<div className="flex flex-row gap-2 sm:gap-8 min-w-sm w-3/5 py-8 px-8 rounded-lg justify-between bg-[#D3E5FF] items-center">
			<img className="h-auto w-1/4 rounded-lg" src={data?.urlImg} alt="Provider photo" />
			<h3 className="text-lg font-bold">{`${data?.names} ${data?.lastnames}`}</h3>
			<h3 className="text-xs sm:text-base">Estrellas</h3>
			<h3 className="text-lg font-bold">{data?.rate}</h3>
		</div>
	);
};

export default CardTopProvider;
