import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import SideBar from "../../components/shared/SideBar";
import CardProvider from "../../components/shared/CardProvider";
import { useSearchBar } from "../../hooks/useSearchBar";
import Loading from "../../components/shared/Loading";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";
import { getCategoriesRequest } from "../../services/categories.services";
import { getKeywordsRequest } from "../../services/keywords.services";
import { getServicesRequest } from "../../services/services.services";
import { getProvidersRequest } from "../../services/providers.services";
import { getUserToken } from "../../helpers/localStorageManagement";

const SearchProviders = () => {
	const [categories, setCategories] = useState([]);
	const [services, setServices] = useState([]);
	const [keywords, setKeywords] = useState([]);
	const [providers, setProviders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const { initialValues, searchResults, setSearchResults, handleChange, inputSearch } = useSearchBar(
		providers,
		"username"
	);

	// * FILTROS CON SELECT
	const [selectedOptionService, setSelectedOptionService] = useState({ label: "No service", value: 0 });
	const [selectedOptionCategory, setSelectedOptionCategory] = useState({ label: "No category", value: 0 });
	const [selectedOptionKeyWord, setSelectedOptionKeyWord] = useState({ label: "No keyword", value: 0 });

	if (isLoading) {
		<Loading />;
	}
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const categories = await getCategoriesRequest(getUserToken());
			const services = await getServicesRequest(getUserToken());
			const keywords = await getKeywordsRequest(getUserToken());
			const providers = await getProvidersRequest(getUserToken());

			setProviders(providers);

			const servicesCopy = [...services];
			const categoriesCopy = [...categories];
			const keywordsCopy = [...keywords];

			servicesCopy.unshift(selectedOptionService);
			categoriesCopy.unshift(selectedOptionCategory);
			keywordsCopy.unshift(selectedOptionKeyWord);

			setServices(servicesCopy);
			setCategories(categoriesCopy);
			setKeywords(keywordsCopy);

			setIsLoading(false);
		};

		const load = async () => {
			await fetchData();
		};

		load();
	}, []);

	useEffect(() => {
		filterBySelect();
	}, [selectedOptionService, selectedOptionCategory, selectedOptionKeyWord, inputSearch]);

	const filterBySelect = () => {
		if (
			selectedOptionService?.value === 0 &&
			selectedOptionCategory?.value === 0 &&
			selectedOptionKeyWord?.value === 0 &&
			inputSearch === ""
		) {
			setSearchResults(providers);
			return;
		}
		if (inputSearch === "") {
			console.log(selectedOptionService);
			console.log(providers[0]?.service?._id);
			// * FILTRAR ÚNICAMENTE POR SERVICIO
			if (selectedOptionCategory?.value === 0 && selectedOptionKeyWord?.value === 0) {
				const filter = providers?.filter((provider) => provider?.service?._id === selectedOptionService?.value);
				setSearchResults(filter);
			} else if (selectedOptionService?.value === 0 && selectedOptionKeyWord?.value === 0) {
				//* FILTRAR ÚNICAMENTE POR CATEGORÍA
				const filter = providers?.filter(
					(provider) => provider?.category?._id === selectedOptionCategory?.value
				);
				setSearchResults(filter);
			} else if (selectedOptionService?.value === 0 && selectedOptionCategory?.value === 0) {
				const filter = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (existKeyword?.length > 0) {
						return provider;
					}
				});
				setSearchResults(filter);
			} else if (
				selectedOptionCategory?.value !== 0 &&
				selectedOptionService?.value !== 0 &&
				selectedOptionKeyWord?.value === 0
			) {
				//* FILTRAR POR CATEGORÍA Y SERVICIO
				const filter = providers?.filter(
					(provider) =>
						provider?.category?.value === selectedOptionCategory?.value &&
						provider?.service?.value === selectedOptionService?.value
				);
				setSearchResults(filter);
			} else if (
				selectedOptionService?.value !== 0 &&
				selectedOptionKeyWord?.value !== 0 &&
				selectedOptionCategory?.value === 0
			) {
				//* FILTRAR POR KEYWORD Y SERVICIO
				const filter = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (existKeyword?.length > 0 && selectedOptionService?.value === provider?.service?.value) {
						return provider;
					}
				});
				setSearchResults(filter);
			} else if (
				selectedOptionService?.value === 0 &&
				selectedOptionKeyWord?.value !== 0 &&
				selectedOptionCategory?.value !== 0
			) {
				//* FILTRAR POR KEYWORD Y CATEGORY
				const filter = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (existKeyword?.length > 0 && selectedOptionCategory?.value === provider?.category?.value) {
						return provider;
					}
				});
				setSearchResults(filter);
			} else {
				const filter = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (
						existKeyword?.length > 0 &&
						selectedOptionService?.value === provider?.service?.value &&
						selectedOptionCategory?.value === provider?.category?.value
					) {
						return provider;
					}
				});
				setSearchResults(filter);
			}
		} else {
			if (
				selectedOptionCategory?.value === 0 &&
				selectedOptionKeyWord?.value === 0 &&
				selectedOptionService?.value === 0 &&
				inputSearch !== ""
			) {
				const result = providers?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			}

			// * FILTRAR ÚNICAMENTE POR SERVICIO
			else if (selectedOptionCategory?.value === 0 && selectedOptionKeyWord?.value === 0) {
				const filterWithSearch = providers?.filter(
					(provider) => provider?.service?.value === selectedOptionService?.value
				);

				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (selectedOptionService?.value === 0 && selectedOptionKeyWord?.value === 0) {
				//* FILTRAR ÚNICAMENTE POR CATEGORÍA
				const filterWithSearch = providers?.filter(
					(provider) => provider?.category?.value === selectedOptionCategory?.value
				);

				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (selectedOptionService?.value === 0 && selectedOptionCategory?.value === 0) {
				const filterWithSearch = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (existKeyword?.length > 0) {
						return provider;
					}
				});
				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (
				selectedOptionCategory?.value !== 0 &&
				selectedOptionService?.value !== 0 &&
				selectedOptionKeyWord?.value === 0
			) {
				//* FILTRAR POR CATEGORÍA Y SERVICIO
				const filterWithSearch = providers?.filter(
					(provider) =>
						provider?.category?.value === selectedOptionCategory?.value &&
						provider?.service?.value === selectedOptionService?.value
				);
				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (
				selectedOptionService?.value !== 0 &&
				selectedOptionKeyWord?.value !== 0 &&
				selectedOptionCategory?.value === 0
			) {
				//* FILTRAR POR KEYWORD Y SERVICIO
				const filterWithSearch = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord.value;
					});
					if (existKeyword?.length > 0 && selectedOptionService?.value === provider?.service?.value) {
						return provider;
					}
				});
				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else if (
				selectedOptionService?.value === 0 &&
				selectedOptionKeyWord?.value !== 0 &&
				selectedOptionCategory?.value !== 0
			) {
				//* FILTRAR POR KEYWORD Y CATEGORY
				const filterWithSearch = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (existKeyword?.length > 0 && selectedOptionCategory?.value === provider?.category?.value) {
						return provider;
					}
				});
				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			} else {
				const filterWithSearch = providers?.filter((provider) => {
					const existKeyword = provider?.keywords?.filter((k) => {
						return k?.value === selectedOptionKeyWord?.value;
					});
					if (
						existKeyword?.length > 0 &&
						selectedOptionService?.value === provider?.service?.value &&
						selectedOptionCategory?.value === provider?.category?.value
					) {
						return provider;
					}
				});
				const result = filterWithSearch?.filter((element) => {
					if (element?.username?.toLowerCase().includes(inputSearch.toLowerCase())) {
						return element;
					}
				});
				setSearchResults(result);
			}
		}
	};

	return (
		<section className="flex">
			{isLoading ? (
				<Loading />
			) : (
				<>
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
				</>
			)}
		</section>
	);
};

export default SearchProviders;
