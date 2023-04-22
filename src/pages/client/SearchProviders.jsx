import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import SideBar from "../../components/shared/SideBar";
import CardProvider from "../../components/shared/CardProvider";
import { useSearchBar } from "../../hooks/useSearchBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";

const SearchProviders = () => {
	const { providers } = useSelector((state) => state.providers);
	const { services } = useSelector((state) => state.services);
	const { categories } = useSelector((state) => state.categories);
	const { keywords } = useSelector((state) => state.keywords);
	const dispatch = useDispatch();
	const { initialValues, searchResults, setSearchResults, handleChange, inputSearch } = useSearchBar(
		providers,
		"username"
	);
	// console.log(inputSearch);
	// * FILTROS CON SELECT
	const [selectedOptionService, setSelectedOptionService] = useState(services[0]);
	const [selectedOptionCategory, setSelectedOptionCategory] = useState(categories[0]);
	const [selectedOptionKeyWord, setSelectedOptionKeyWord] = useState(keywords[0]);

	useEffect(() => {
		filterBySelect();
	}, [selectedOptionService, selectedOptionCategory, selectedOptionKeyWord, inputSearch]);

	const filterBySelect = () => {
		if (
			selectedOptionService.value === 0 &&
			selectedOptionCategory.value === 0 &&
			selectedOptionKeyWord.value === 0 &&
			inputSearch === ""
		) {
			// console.log("Quitar filtro");
			setSearchResults(providers);
			return;
		}

		if (inputSearch === "") {
			// console.log("Existe un filtro SIN BARRA DE BUSQUEDA");
			// console.log(selectedOptionService);
			// * FILTRAR ÚNICAMENTE POR SERVICIO
			if (selectedOptionCategory.value === 0 && selectedOptionKeyWord.value === 0) {
				// console.log("FILTRADO POR SERVICIO");
				const filter = providers.filter((provider) => provider.service.value === selectedOptionService.value);
				setSearchResults(filter);
			} else if (selectedOptionService.value === 0 && selectedOptionKeyWord.value === 0) {
				//* FILTRAR ÚNICAMENTE POR CATEGORÍA
				// console.log("FILTRADO POR CATEGORIA");
				const filter = providers.filter((provider) => provider.category.value === selectedOptionCategory.value);
				setSearchResults(filter);
			} else if (selectedOptionService.value === 0 && selectedOptionCategory.value === 0) {
				// console.log("FILTRADO POR Keyword");
				// console.log(selectedOptionKeyWord);
				const filter = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (existKeyword.length > 0) {
						return provider;
					}
				});
				setSearchResults(filter);
			} else if (
				selectedOptionCategory.value !== 0 &&
				selectedOptionService.value !== 0 &&
				selectedOptionKeyWord.value === 0
			) {
				//* FILTRAR POR CATEGORÍA Y SERVICIO
				// console.log("FILTRAR CATEGORIA Y SERVICIO");
				const filter = providers.filter(
					(provider) =>
						provider.category.value === selectedOptionCategory.value &&
						provider.service.value === selectedOptionService.value
				);
				// console.log(filter);
				setSearchResults(filter);
			} else if (
				selectedOptionService.value !== 0 &&
				selectedOptionKeyWord.value !== 0 &&
				selectedOptionCategory.value === 0
			) {
				//* FILTRAR POR KEYWORD Y SERVICIO
				// console.log("FILTRO POR KEYWORD Y SERVICIO");
				const filter = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (existKeyword.length > 0 && selectedOptionService.value === provider.service.value) {
						return provider;
					}
				});
				setSearchResults(filter);
			} else if (
				selectedOptionService.value === 0 &&
				selectedOptionKeyWord.value !== 0 &&
				selectedOptionCategory.value !== 0
			) {
				//* FILTRAR POR KEYWORD Y CATEGORY
				// console.log("FILTRO POR KEYWORD Y CATEGORY");
				const filter = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (existKeyword.length > 0 && selectedOptionCategory.value === provider.category.value) {
						return provider;
					}
				});
				setSearchResults(filter);
			} else {
				// console.log("FILTRAR POR TODO");
				const filter = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (
						existKeyword.length > 0 &&
						selectedOptionService.value === provider.service.value &&
						selectedOptionCategory.value === provider.category.value
					) {
						return provider;
					}
				});
				setSearchResults(filter);
			}
		} else {
			// console.log("😼 Existe un filtro CON BARRA DE BUSQUEDA");

			if (
				selectedOptionCategory.value === 0 &&
				selectedOptionKeyWord.value === 0 &&
				selectedOptionService.value === 0 &&
				inputSearch !== ""
			) {
				const result = providers.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			}

			// * FILTRAR ÚNICAMENTE POR SERVICIO
			else if (selectedOptionCategory.value === 0 && selectedOptionKeyWord.value === 0) {
				// console.log("FILTRADO POR SERVICIO");
				const filterWithSearch = providers.filter(
					(provider) => provider.service.value === selectedOptionService.value
				);

				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (selectedOptionService.value === 0 && selectedOptionKeyWord.value === 0) {
				//* FILTRAR ÚNICAMENTE POR CATEGORÍA
				// console.log("FILTRADO POR CATEGORIA");
				const filterWithSearch = providers.filter(
					(provider) => provider.category.value === selectedOptionCategory.value
				);

				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (selectedOptionService.value === 0 && selectedOptionCategory.value === 0) {
				// console.log("FILTRADO POR Keyword");
				// console.log(selectedOptionKeyWord);
				const filterWithSearch = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (existKeyword.length > 0) {
						return provider;
					}
				});
				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (
				selectedOptionCategory.value !== 0 &&
				selectedOptionService.value !== 0 &&
				selectedOptionKeyWord.value === 0
			) {
				//* FILTRAR POR CATEGORÍA Y SERVICIO
				// console.log("FILTRAR CATEGORIA Y SERVICIO");
				const filterWithSearch = providers.filter(
					(provider) =>
						provider.category.value === selectedOptionCategory.value &&
						provider.service.value === selectedOptionService.value
				);
				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (
				selectedOptionService.value !== 0 &&
				selectedOptionKeyWord.value !== 0 &&
				selectedOptionCategory.value === 0
			) {
				//* FILTRAR POR KEYWORD Y SERVICIO
				// console.log("FILTRO POR KEYWORD Y SERVICIO");
				const filterWithSearch = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (existKeyword.length > 0 && selectedOptionService.value === provider.service.value) {
						return provider;
					}
				});
				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (
				selectedOptionService.value === 0 &&
				selectedOptionKeyWord.value !== 0 &&
				selectedOptionCategory.value !== 0
			) {
				//* FILTRAR POR KEYWORD Y CATEGORY
				// console.log("FILTRO POR KEYWORD Y CATEGORY");
				const filterWithSearch = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (existKeyword.length > 0 && selectedOptionCategory.value === provider.category.value) {
						return provider;
					}
				});
				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else {
				// console.log("FILTRAR POR TODO");
				const filterWithSearch = providers.filter((provider) => {
					// console.log("Actualmente con " + provider.names);
					const existKeyword = provider.keywords?.filter((k) => {
						// console.log(k);
						return k.value === selectedOptionKeyWord.value;
					});
					// console.log(existKeyword === true);
					if (
						existKeyword.length > 0 &&
						selectedOptionService.value === provider.service.value &&
						selectedOptionCategory.value === provider.category.value
					) {
						return provider;
					}
				});
				const result = filterWithSearch.filter((element) => {
					if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			}
		}
	};

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full">
				<h1 className="text-xl md:text-4xl font-bold text-center my-9">Search a provider</h1>
				<div className="w-3/4 mx-auto">
					<SearchBar handleChange={handleChange} />
				</div>
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
