import React, { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

const DropDownList = ({ selected, setSelected, label, availableOptions }) => {
	const [isActive, setIsActive] = useState(false);
	const [options, setOptions] = useState(availableOptions);
	// console.log(options);
	return (
		<div className="flex flex-col items-center my-6">
			<label className="block mb-2 text-base font-semibold text-gray-900 items-start">{label}</label>
			<div
				onClick={(e) => setIsActive(!isActive)}
				className={`bg-white w-2/4 text-sm text-gray-900 p-2.5 flex items-center rounded-lg border border-gray-300 justify-between`}>
				{selected.name}
				<FiChevronDown size={20} className={`${isActive && "rotate-180"}`} /> {/**/}
			</div>
			{isActive && (
				<div className={`bg-white mt-2 overflow-y-auto w-2/4 ${isActive ? "max-h-60" : "max-h-0"} `}>
					{options.map((option) => (
						<div
							className={`p-2 text-sm hover:bg-sky-600 hover:text-white`}
							key={option.id}
							onClick={(e) => {
								setSelected(option);
								setIsActive(false);
							}}>
							{option.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDownList;
