import React from "react";

const KeyWordT = ({ data }) => {
	return (
		<p className="text-sm items-center text-center font-bold leading-sm py-1 px-6 my-1 mx-1 bg-keyTag w-fit rounded-full text-keywordText">
			{data.name}
		</p>
	);
};

export default KeyWordT;
