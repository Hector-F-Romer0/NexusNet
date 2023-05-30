import React, { useEffect, useState } from "react";

import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import Loading from "../../components/shared/Loading";
import { getUserToken } from "../../helpers/localStorageManagement";
import {
	deleteKeywordRequest,
	getKeywordsRequest,
	postKeywordRequest,
	putKeywordRequest,
} from "../../services/keywords.services";
import { showErrorModal, showSuccessModal } from "../../components/modals/customModals";
import Swal from "sweetalert2";

const KeyWordsCRUD = () => {
	const [keywords, setKeywords] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getKeywordsBD = async () => {
			setIsLoading(true);
			const keywords = await getKeywordsRequest(getUserToken());
			setKeywords(keywords);
			setIsLoading(false);
		};

		getKeywordsBD();
	}, []);

	const handleCreateKeyword = async () => {
		await Swal.fire({
			title: "Create a category:",
			input: "text",
			inputLabel: "Category",
		}).then(async (result) => {
			try {
				if (!result.value) {
					return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				}
				await postKeywordRequest({ label: result.value }, getUserToken());
				setKeywords(await getKeywordsRequest(getUserToken()));
				showSuccessModal(
					"Keyword create successfully",
					`The keyword ${result.value} was created from database.`,
					"Done"
				);
			} catch (error) {
				return await showErrorModal(error.name, error.message, "Ok, I'll try");
			}
		});
	};

	const handleUpdateKeyword = async (data) => {
		await Swal.fire({
			title: `Update the category ${data?.label}`,
			input: "text",
			inputLabel: "Category",
		}).then(async (result) => {
			try {
				if (!result.value) {
					return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				}
				await putKeywordRequest(data.value, { label: result.value }, getUserToken());
				showSuccessModal(
					"Keyword update successfully",
					`The keyword ${result.value} was updated from database.`,
					"Done"
				);
				setKeywords(await getKeywordsRequest(getUserToken()));
			} catch (error) {
				return await showErrorModal(error.name, error.message, "Ok, I'll try");
			}
		});
	};

	const handleDeleteKeyword = async (data) => {
		await deleteKeywordRequest(data.value, getUserToken());
		setKeywords(await getKeywordsRequest(getUserToken()));
		await showSuccessModal(
			"Keyword deleted successfully",
			`The keyword ${data.lable} was deleted from database.`,
			"Done"
		);
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
					data={keywords}
					nameToManage={"Key words"}
					handleCreate={handleCreateKeyword}
					handleUpdate={handleUpdateKeyword}
					handleDelete={handleDeleteKeyword}
				/>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default KeyWordsCRUD;
