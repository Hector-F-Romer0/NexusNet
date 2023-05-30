import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ handleChange, placeholder }) => {
	return (
		<>
			<form className="border-t-indigo-900">
				<label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<FiSearch className="w-5 h-5 text-gray-500 " />
					</div>
					<input
						type="search"
						onChange={(e) => handleChange(e)}
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
						placeholder={placeholder}
					/>
				</div>
			</form>
		</>
	);
};

export default SearchBar;
