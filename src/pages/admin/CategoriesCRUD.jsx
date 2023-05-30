import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import CRUDManagement from "../../components/admin/CRUDManagement";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import {
	deleteCategoryRequest,
	getCategoriesRequest,
	postCategoryRequest,
	putCategoryRequest,
} from "../../services/categories.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import { showErrorModal, showSuccessModal } from "../../components/modals/customModals";

const CategoriesCRUD = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getCategoriesBD = async () => {
			setIsLoading(true);
			const categories = await getCategoriesRequest(getUserToken());
			setCategories(categories);
			setIsLoading(false);
		};

		getCategoriesBD();
	}, []);

	const handleCreateCategory = async () => {
		await Swal.fire({
			title: "Create a category:",
			input: "text",
			inputLabel: "Category",
		}).then(async (result) => {
			try {
				if (!result.value) {
					return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				}
				await postCategoryRequest({ label: result.value }, getUserToken());
				setCategories(await getCategoriesRequest(getUserToken()));
				showSuccessModal(
					"Category create successfully",
					`The category ${result.value} was created from database.`,
					"Done"
				);
			} catch (error) {
				return await showErrorModal(error.name, error.message, "Ok, I'll try");
			}
		});
	};

	const handleUpdateCategory = async (data) => {
		await Swal.fire({
			title: `Update the category ${data?.label}`,
			input: "text",
			inputLabel: "Category",
		}).then(async (result) => {
			try {
				if (!result.value) {
					return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				}
				await putCategoryRequest(data.value, { label: result.value }, getUserToken());
				showSuccessModal(
					"Category update successfully",
					`The category ${result.value} was updated from database.`,
					"Done"
				);
				setCategories(await getCategoriesRequest(getUserToken()));
			} catch (error) {
				return await showErrorModal(error.name, error.message, "Ok, I'll try");
			}
		});
	};

	const handleDeleteCategory = async (data) => {
		await deleteCategoryRequest(data.value, getUserToken());
		setCategories(await getCategoriesRequest(getUserToken()));
		await showSuccessModal(
			"Category deleted successfully",
			`The category ${data.lable} was deleted from database.`,
			"Done"
		);
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="flex">
			<ContainerSideBar>
				<AdminSideBar />
			</ContainerSideBar>
			<div className="w-full">
				<CRUDManagement
					data={categories}
					nameToManage={"Categories"}
					handleCreate={handleCreateCategory}
					handleUpdate={handleUpdateCategory}
					handleDelete={handleDeleteCategory}
				/>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default CategoriesCRUD;
