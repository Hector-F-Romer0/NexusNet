import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import CRUDManagement from "../../components/admin/CRUDManagement";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { getCategoriesRequest, postCategoryRequest } from "../../services/categories.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import Loading from "../../components/shared/Loading";

const CategoriesCRUD = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const MySwal = withReactContent(Swal);

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
			inputValidator: async (value) => {
				if (!value) {
					return "You need to write something!";
				}
				if (value) {
					// dispatch(postCategoryRequest(value));
					const res = await postCategoryRequest({ label: value }, getUserToken());
					console.log(res);
					MySwal.fire({
						title: "Category create successfully",
						icon: "success",
						text: `The category was created from database.`,
						confirmButtonColor: "#007BFF",
						confirmButtonText: "Done",
					});
				}
			},
		});
	};

	const handleUpdateCategory = async (data) => {
		await Swal.fire({
			title: `Update the category ${data?.label}`,
			input: "text",
			inputLabel: "Category",
			inputValidator: (value) => {
				console.log(data);
				console.log("-------");
				if (!value) {
					return "You need to write something!";
				}
				if (value) {
					dispatch(putCategoryRequest({ id: data.id, label: value }));
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

	if (isLoading) {
		<Loading />;
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
				/>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default CategoriesCRUD;
