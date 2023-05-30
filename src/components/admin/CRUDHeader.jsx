import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";
import SearchBar from "../shared/SearchBar";
import { useSearchBar } from "../../hooks/useSearchBar";

const CRUDHeader = ({ titleToManage, handleChange, handleCreate }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);
	// console.log(handleCreate);
	//! CREATE

	// const detectNameCreate = () => {
	// 	if (titleToManage === "Categories") {
	// 		handleCreateCategory();
	// 	} else if (titleToManage === "Services") {
	// 		handleCreateService();
	// 	} else {
	// 		handleCreateKeyword();
	// 	}
	// };

	// const handleCreateCategory = async () => {
	// 	await Swal.fire({
	// 		title: "Create a category:",
	// 		input: "text",
	// 		inputLabel: "Category",
	// 		inputValidator: (value) => {
	// 			if (!value) {
	// 				return "You need to write something!";
	// 			}
	// 			if (value) {
	// 				// const id = Date.now();
	// 				goToCreate(id, value);
	// 				MySwal.fire({
	// 					title: "Category create successfully",
	// 					icon: "success",
	// 					text: `The category was created from database.`,
	// 					confirmButtonColor: "#007BFF",
	// 					confirmButtonText: "Done",
	// 				});
	// 			}
	// 		},
	// 	});
	// };

	const goToCreate = (id, name) => {
		if (titleToManage === "Categories") {
			dispatch(createCategory({ value: id, label: name }));
		} else if (titleToManage === "Services") {
			dispatch(createService({ value: id, label: name }));
		} else {
			dispatch(createKeyword({ value: id, label: name }));
		}
	};

	return (
		<div>
			<div className="flex flex-col items-center">
				<h1 className="text-mainTitle ml-5 text-5xl font-extrabold my-5"> {`CRUD ${titleToManage}`} </h1>
				<h4 className="text-black ml-5 text-2xl my-4">
					{`Create, Read, Update and Delete Categories ${titleToManage}`}
				</h4>
			</div>
			<div className=" flex items-center py-6">
				<div>
					<h1 className="text-mainTitle ml-5 text-5xl font-semibold"> {titleToManage} </h1>
				</div>
				<div className="flex items-center justify-between">
					<div className="mx-20">
						<button
							onClick={() => handleCreate()}
							className="bg-buttonAdmin py-2 w-64 rounded-2xl text-white font-semibold tracking-wide cursor-pointer">
							{`Create ${titleToManage}`}
						</button>
					</div>
					<SearchBar handleChange={handleChange} />
					{/*<div className="flex bg-[#F0F0F0] items-center rounded-2xl p-2 w-96">

						 <FiSearch size={26}></FiSearch>
						<input
							className="bg-[#F0F0F0] outline-none ml-1 block"
							type="text"
							name=""
							id=""
							placeholder={`Search ${titleToManage} here...`}
						/> 
					</div>*/}
				</div>
			</div>
		</div>
	);
};

export default CRUDHeader;
