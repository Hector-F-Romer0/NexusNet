import React, { useEffect, useState } from "react";

import CRUDManagement from "../../components/admin/CRUDManagement";
import AdminSideBar from "../../components/admin/AdminSideBar";
import Footer from "../../components/shared/Footer";
import { ContainerSideBar, ContainerFooter } from "../../styled-components/shared/container.style";
import {
	deleteServiceRequest,
	getServicesRequest,
	postServiceRequest,
	putServiceRequest,
} from "../../services/services.services";
import { getUserToken } from "../../helpers/localStorageManagement";
import { showErrorModal, showSuccessModal } from "../../components/modals/customModals";
import Swal from "sweetalert2";

const ServicesCRUD = () => {
	const [services, setServices] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getServicesBD = async () => {
			setIsLoading(true);
			const services = await getServicesRequest(getUserToken());
			setServices(services);
			setIsLoading(false);
		};

		getServicesBD();
	}, []);

	const handleCreateService = async () => {
		await Swal.fire({
			title: "Create a category:",
			input: "text",
			inputLabel: "Category",
		}).then(async (result) => {
			try {
				if (!result.value) {
					return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				}
				await postServiceRequest({ label: result.value }, getUserToken());
				setServices(await getServicesRequest(getUserToken()));
				showSuccessModal(
					"Service create successfully",
					`The service ${result.value} was created from database.`,
					"Done"
				);
			} catch (error) {
				return await showErrorModal(error.name, error.message, "Ok, I'll try");
			}
		});
	};

	const handleUpdateService = async (data) => {
		await Swal.fire({
			title: `Update the category ${data?.label}`,
			input: "text",
			inputLabel: "Category",
		}).then(async (result) => {
			try {
				if (!result.value) {
					return await showErrorModal("Empty field", "You need to write something!", "Ok, I'll try");
				}
				await putServiceRequest(data.value, { label: result.value }, getUserToken());
				showSuccessModal(
					"Service update successfully",
					`The service ${result.value} was updated from database.`,
					"Done"
				);
				setServices(await getServicesRequest(getUserToken()));
			} catch (error) {
				return await showErrorModal(error.name, error.message, "Ok, I'll try");
			}
		});
	};

	const handleDeleteService = async (data) => {
		await deleteServiceRequest(data.value, getUserToken());
		setServices(await getServicesRequest(getUserToken()));
		await showSuccessModal(
			"Service deleted successfully",
			`The service ${data.lable} was deleted from database.`,
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
					data={services}
					nameToManage={"Services"}
					handleCreate={handleCreateService}
					handleUpdate={handleUpdateService}
					handleDelete={handleDeleteService}
				/>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default ServicesCRUD;
