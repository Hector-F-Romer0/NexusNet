import React from "react";

const CardChat = ({ data }) => {
	return (
		<div className="flex flex-row gap-2 sm:gap-8 min-w-sm py-8 px-8 rounded-lg justify-between bg-[#D3E5FF] items-center w-full">
			<img className="h-auto w-1/4 rounded-lg" src={"/src/assets/Duck.jpg"} alt="Provider photo" />
			<h3 className="text-lg font-bold">{`${data?.names} ${data?.lastnames}`}</h3>
			<circle className="w-6 h-6 rounded-full bg-[#0ED92E]"></circle>
		</div>
	);
};

export default CardChat;
