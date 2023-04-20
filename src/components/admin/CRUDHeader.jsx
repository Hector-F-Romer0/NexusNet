import React from "react";
import { FiSearch } from "react-icons/fi";

const CRUDHeader = () => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<h1 className="text-mainTitle ml-5 text-5xl font-extrabold my-5"> CRUD Categories </h1>
				<h4 className="text-black ml-5 text-2xl my-4"> Create, Read, Update and Delete Categories </h4>
			</div>
			<div className=" flex items-center py-6">
				<div>
					<h1 className="text-mainTitle ml-5 text-5xl font-semibold">Categories</h1>
				</div>
				<div className="flex items-center justify-between">
					<div className="mx-20">
						<button className="bg-buttonAdmin py-2 w-64 rounded-2xl text-white font-semibold tracking-wide cursor-pointer">
							Create category
						</button>
					</div>
					<div className="flex bg-[#F0F0F0] items-center rounded-2xl p-2 w-96">
						<FiSearch size={26}></FiSearch>
						<input
							className="bg-[#F0F0F0] outline-none ml-1 block"
							type="text"
							name=""
							id=""
							placeholder="Search categories here..."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CRUDHeader;
