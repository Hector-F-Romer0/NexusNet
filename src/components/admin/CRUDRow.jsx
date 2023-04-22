import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCategory, updateCategory } from "../../store/slices/categories/categoriesSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteKeyword, updateKeyword } from "../../store/slices/keywords/keywordsSlice";
import { deleteServices, updateService } from "../../store/slices/services/servicesSlice";

const CRUDRow = ({ data, titleToManage }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);

	//!DELETE

	const detectNameDelete = () => {
		if (titleToManage === "Categories") {
			handleDeleteCategory();
		} else if (titleToManage === "Services") {
			handleDeleteService();
		} else {
			handleDeleteKeyword();
		}
	};

	const handleDeleteCategory = async () => {
		console.log(data);
		dispatch(deleteCategory(data?.value));
		await MySwal.fire({
			title: "Category deleted successfully",
			icon: "success",
			text: `The category ${data?.label} was deleted from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Done",
		});
		navigate("/admin/categories");
	};

	const handleDeleteService = async () => {
		dispatch(deleteServices(data?.value));
		await MySwal.fire({
			title: "Service deleted successfully",
			icon: "success",
			text: `The service ${data?.label} was deleted from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Done",
		});
		navigate("/admin/services");
	};

	const handleDeleteKeyword = async () => {
		dispatch(deleteKeyword(data?.value));
		await MySwal.fire({
			title: "Keyword deleted successfully",
			icon: "success",
			text: `The keyword ${data?.label} was deleted from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Done",
		});
		navigate("/admin/keywords");
	};

	//! UPDATE

	const detectNameUpdate = () => {
		if (titleToManage === "Categories") {
			handleUpdateCategory();
		} else if (titleToManage === "Services") {
			handleUpdateService();
		} else {
			handleUpdateKeyword();
		}
	};

	const handleUpdateCategory = async () => {
		await Swal.fire({
			title: `Update the category ${data?.label}`,
			input: "text",
			inputLabel: "Category",
			inputValidator: (value) => {
				if (!value) {
					return "You need to write something!";
				}
				if (value) {
					goToUpdate(value);
				}
			},
		});
		await MySwal.fire({
			title: "Category update successfully",
			icon: "success",
			text: `The category ${data?.label} was updated from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Done",
		});
	};

	const handleUpdateService = async () => {
		await Swal.fire({
			title: `Update the service ${data?.label}`,
			input: "text",
			inputLabel: "Service",
			inputValidator: (value) => {
				if (!value) {
					return "You need to write something!";
				}
				if (value) {
					goToUpdate(value);
				}
			},
		});
		await MySwal.fire({
			title: "Service update successfully",
			icon: "success",
			text: `The service ${data?.label} was updated from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Done",
		});
	};

	const handleUpdateKeyword = async () => {
		await Swal.fire({
			title: `Update the keyword ${data?.label}`,
			input: "text",
			inputLabel: "Key word",
			inputValidator: (value) => {
				if (!value) {
					return "You need to write something!";
				}
				if (value) {
					goToUpdate(value);
				}
			},
		});
		await MySwal.fire({
			title: "Key word update successfully",
			icon: "success",
			text: `The keyword ${data?.label} was updated from database.`,
			confirmButtonColor: "#007BFF",
			confirmButtonText: "Done",
		});
	};

	const goToUpdate = (name) => {
		if (titleToManage === "Categories") {
			dispatch(updateCategory({ value: data.value, label: name }));
		} else if (titleToManage === "Services") {
			dispatch(updateService({ value: data.value, label: name }));
		} else {
			dispatch(updateKeyword({ value: data.value, label: name }));
		}
	};

	return (
		<tr>
			<td className="px-15 w-44 py-4 border-b border-white bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap text-center">{data?.value}</p>
			</td>
			<td className="px-15 py-4 border-b border-white bg-white text-center text-sm">
				<p className="text-gray-900 whitespace-no-wrap">{data?.label}</p>
			</td>
			<td className="px-5 py-4 border-b border-white bg-white">
				<div className="flex flex-row justify-end">
					<button
						onClick={() => detectNameDelete()}
						className="flex mr-4 py-1 bg-buttonAdmin text-white font-semibold rounded-2xl justify-center items-center my-1 text-xs w-40 lg:w-40 md:text-md">
						<FiTrash2 size={20}></FiTrash2>
						<span className="ml-1">Delete</span>
					</button>
					<button
						onClick={() => detectNameUpdate()}
						className="flex ml-4 mr-10 py-1 bg-buttonAdmin text-white font-semibold rounded-2xl justify-center items-center my-1 text-xs w-40 lg:w-40 md:text-md">
						<FiEdit size={20}></FiEdit>
						<span className="ml-1">Update</span>
					</button>
				</div>
			</td>
		</tr>
	);
};

export default CRUDRow;
