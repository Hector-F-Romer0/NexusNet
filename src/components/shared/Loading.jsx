import React from "react";
import isLoading from "../../assets/isLoading.gif";

const Loading = () => {
	return (
		<div className="h-screen bg-white w-screen">
			<div className="flex justify-center items-center h-full">
				<h1 className="text-2xl font-montserrat font-bold">Loading...</h1>
				<img className="h-52 w-52" src={isLoading} alt="" />
			</div>
		</div>
	);
};

export default Loading;
