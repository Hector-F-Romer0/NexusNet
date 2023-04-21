import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchBar } from "../../hooks/useSearchBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";
import DropDownList from "../../components/shared/DropDownList";
import SearchBar from "../../components/shared/SearchBar";
import CardProvider from "../../components/shared/CardProvider";
import Footer from "../../components/shared/Footer";
import SideBar from "../../components/shared/SideBar";
import { getServices } from "../../store/slices/services/thunks";
import CardCase from "../../components/shared/CardCase";

const ProviderSearchCases = () => {
	const { cases, isLoading } = useSelector((state) => state.cases);
	const { services } = useSelector((state) => state.services);
	const dispatch = useDispatch();

	const { initialValues, searchResults, setSearchResults, handleChange } = useSearchBar(cases);

	const [selectedService, setSelectedService] = useState({
		id: 0,
		name: "Choose one",
	});

	// useEffect(() => {
	// 	dispatch(getServices());
	// }, [services]);

	useEffect(() => {
		dispatch(getServices());
	}, []);

	useEffect(() => {
		console.log("Cambió servicio");
		console.log(selectedService);
		const { id } = selectedService;
		console.log(id);
		if (id === 0) {
			console.log("no ha seleccionado nada");
			setSearchResults(initialValues);
			return;
		} else {
			const filterService = searchResults.filter((item) => item?.id === id);
			setSearchResults(filterService);
		}
	}, [selectedService]);

	if (isLoading) {
		return <h1>Cargando...</h1>;
	}
	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full">
				<h1 className="text-xl md:text-4xl font-bold text-center my-9">Search a case</h1>
				<div className="w-3/4 mx-auto">
					<SearchBar handleChange={handleChange} />
				</div>
				<div>
					<DropDownList
						availableOptions={services}
						selected={selectedService}
						setSelected={setSelectedService}
					/>
				</div>
				<div className="flex flex-col flex-wrap  gap-6 content-center mb-7">
					{searchResults?.map((provider) => (
						<CardCase key={provider.id} data={cases} />
					))}
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default ProviderSearchCases;
