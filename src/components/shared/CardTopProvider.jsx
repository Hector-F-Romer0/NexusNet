import React from "react";

const CardTopProvider = ({ img }) => {
	return (
		<div className="flex flex-row gap-2 sm:gap-8 min-w-sm w-4/5 py-8 px-8 rounded-lg justify-between bg-[#D3E5FF] items-center">
			<img className="h-auto w-1/4 rounded-lg" src={img} alt="Provider photo" />
			<h3 className="text-xs sm:text-base">Nombre provider</h3>
			<h3 className="text-xs sm:text-base">Estrellas</h3>
			<h3 className="text-xs sm:text-base">4.5</h3>
		</div>
	);
};

export default CardTopProvider;
