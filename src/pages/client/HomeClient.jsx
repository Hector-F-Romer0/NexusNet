import React, { useState } from "react";

import SideBar from "../../components/shared/SideBar";
import CardCase from "../../components/shared/CardCase";
const HomeClient = () => {
	return (
		<section className="flex gap-2">
			<SideBar />
			<div className="m-3 text-xl text-gray-900 font-semibold">
				<h1 className="text-4xl font-bold text-center mt-5">Welcome to my cases - client</h1>
				<div className="flex flex-row justify-center align-middle gap-10 my-7 text-xs md:text-2xl ">
					<button className="bg-gray-200 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer ">
						Search providers
					</button>
					<button className="bg-gray-200 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
						Upload your cases
					</button>
				</div>
				<div className="flex flex-col items-center justify-center flex-wrap gap-11">
					<CardCase />
					<CardCase />
					<CardCase />
				</div>
			</div>
		</section>
	);
};

export default HomeClient;
