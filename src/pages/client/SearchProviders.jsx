import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import SideBar from "../../components/shared/SideBar";
import DropDownList from "../../components/shared/DropDownList";

import { getServices } from "../../store/slices/services/thunks";
import CardProvider from "../../components/shared/CardProvider";
import { useSearchBar } from "../../hooks/useSearchBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";

const SearchProviders = () => {
	const { providers } = useSelector((state) => state.providers);
	const { services } = useSelector((state) => state.services);
	const { categories } = useSelector((state) => state.categories);
	const { keywords } = useSelector((state) => state.keywords);
	const dispatch = useDispatch();
	const { initialValues, searchResults, setSearchResults, handleChange } = useSearchBar(providers);

	// * FILTROS CON SELECT
	const [selectedOptionService, setSelectedOptionService] = useState(services[0]);
	const [selectedOptionCategory, setSelectedOptionCategory] = useState(categories[0]);
	const [selectedOptionKeyWord, setSelectedOptionKeyWord] = useState(keywords[0]);

	useEffect(() => {
		filterBySelect();
	}, [selectedOptionService, selectedOptionCategory, selectedOptionKeyWord]);

	const filterBySelect = () => {
		if (
			selectedOptionService.value === 0 &&
			selectedOptionCategory.value === 0 &&
			selectedOptionKeyWord.value === 0
		) {
			console.log("Quitar filtro");
			setSearchResults(providers);
			return;
		}
		console.log("Existe un filtro");

		// * FILTRAR ÚNICAMENTE POR SERVICIO
		if (selectedOptionCategory.value === 0 && selectedOptionKeyWord.value === 0) {
			console.log("FILTRADO POR SERVICIO");
			const filter = providers.filter((provider) => provider.service.id === selectedOptionService.value);
			setSearchResults(filter);
		} else if (selectedOptionService.value === 0 && selectedOptionKeyWord.value === 0) {
			//* FILTRAR ÚNICAMENTE POR CATEGORÍA
			console.log("FILTRADO POR CATEGORIA");
			const filter = providers.filter((provider) => provider.category.id === selectedOptionCategory.value);
			setSearchResults(filter);
		} else if (selectedOptionService.value === 0 && selectedOptionCategory.value === 0) {
			console.log("FILTRADO POR Keyword");
			// console.log(selectedOptionKeyWord);
			const filter = providers.filter((provider) => {
				// console.log("Actualmente con " + provider.names);
				const existKeyword = provider.keywords?.filter((k) => {
					// console.log(k);
					return k.id === selectedOptionKeyWord.value;
				});
				// console.log(existKeyword === true);
				if (existKeyword.length > 0) {
					return provider;
				}
			});
			setSearchResults(filter);
		} else {
			console.log("FILTRAR POR TODO");
			const filter = providers.filter(
				(provider) =>
					provider.service === selectedOptionService.value && provider.category === selectedOptionCategory
			);
			setSearchResults(filter);
		}

		// console.log(filter);
	};

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full">
				<h1 className="text-xl md:text-4xl font-bold text-center my-9">Search a provider</h1>
				<div className="w-3/4 mx-auto">{/* <SearchBar handleChange={handleChange} /> */}</div>
				<div className="grid grid-cols-3 mx-12 gap-10 my-4">
					<div>
						<h2 className="text-base md:text-xl font-normal text-center my-1">Service</h2>
						<Select
							defaultValue={selectedOptionService}
							onChange={setSelectedOptionService}
							options={services}
						/>
					</div>
					<div className="">
						<h2 className="text-base md:text-xl font-normal text-center my-1">Category</h2>
						<Select
							defaultValue={selectedOptionCategory}
							onChange={setSelectedOptionCategory}
							options={categories}
						/>
					</div>
					<div className="">
						<h2 className="text-base md:text-xl font-normal text-center my-1">Keyword</h2>
						<Select
							defaultValue={selectedOptionKeyWord}
							onChange={setSelectedOptionKeyWord}
							options={keywords}
						/>
					</div>
				</div>
				<div className="flex flex-col flex-wrap  gap-6 content-center mb-7">
					{searchResults?.map((provider) => (
						<CardProvider key={provider.id} data={provider} />
					))}
				</div>
				<ContainerFooter>
					<Footer />
				</ContainerFooter>
			</div>
		</section>
	);
};

export default SearchProviders;
