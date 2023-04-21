import React from "react";
import { FiTrash2 } from "react-icons/fi";

const CRUDRow = ({ data }) => {
	return (
		<tr>
			<td className="px-15 w-44 py-4 border-b border-white bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap text-center">{data?.id}</p>
			</td>
			<td className="px-15 py-4 border-b border-white bg-white text-center text-sm">
				<p className="text-gray-900 whitespace-no-wrap">{data?.name}</p>
			</td>
			<td className="px-5 py-4 border-b border-white bg-white">
				<div className="flex flex-row justify-end">
					<button className="flex mr-4 py-1 bg-buttonAdmin text-white font-semibold rounded-2xl justify-center items-center my-1 text-xs w-40 lg:w-40 md:text-md">
						<FiTrash2 size={20}></FiTrash2>
						<span className="ml-1">Delete</span>
					</button>
					<button className="flex ml-4 mr-10 py-1 bg-buttonAdmin text-white font-semibold rounded-2xl justify-center items-center my-1 text-xs w-40 lg:w-40 md:text-md">
						<FiTrash2 size={20}></FiTrash2>
						<span className="ml-1">Update</span>
					</button>
				</div>
			</td>
		</tr>
	);
};

export default CRUDRow;
