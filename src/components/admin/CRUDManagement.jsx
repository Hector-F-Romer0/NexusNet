import React from "react";
import { PrimaryButtonStyle } from "../../styled-components/index/Button.style";
import SearchBar from "../shared/SearchBar";
import { FiSearch } from "react-icons/fi";
import CRUDRow from "./CRUDRow";

const CRUDManagement = () => {
	return (
		<div className="bg-white p-8 rounded-md w-full">
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
				<div>
					<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table className="min-w-full leading-normal">
								<thead>
									<tr className="w-full">
										<th className="px-15 w-44 py-3 border-b-2 border-[#2A3042] bg-[#2A3042] text-center text-xs font-semibold text-white uppercase tracking-wider">
											Id. Categories
										</th>
										<th className="px-15 py-3 border-b-2 border-[#2A3042] bg-[#2A3042] text-center text-xs font-semibold text-white uppercase tracking-wider">
											products
										</th>
										<th className="border-b-2 border-[#2A3042] bg-[#2A3042] text-xs font-semibold text-white uppercase tracking-wider">
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									<CRUDRow />
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CRUDManagement;
