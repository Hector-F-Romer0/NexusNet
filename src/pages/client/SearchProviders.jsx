import React, { useState } from "react";

import Footer from "../../components/shared/Footer";
import SearchBar from "../../components/shared/SearchBar";
import SideBar from "../../components/shared/SideBar";
import DropDownList from "../../components/shared/DropDownList";

// ? READ FILES
import keywords from "../../db/keywords.json";
import services from "../../db/services.json";
import categories from "../../db/categories.json";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../store/slices/services/thunks";
import CardProvider from "../../components/shared/CardProvider";
import { useSearchBar } from "../../hooks/useSearchBar";
import { ContainerFooter, ContainerSideBar } from "../../styled-components/shared/container.style";

const SearchProviders = () => {
	const { services } = useSelector((state) => state.services);
	const { providers } = useSelector((state) => state.providers);
	const dispatch = useDispatch();

	const { searchResults, handleChange } = useSearchBar(providers);

	const [selectedService, setSelectedService] = useState({
		id: services[0]?.id,
		name: services[0]?.name,
	});

	useEffect(() => {
		dispatch(getServices());
		// console.log(services);
		// console.log(services[0]);
		// console.log(services[0]?.id);
	}, [services]);

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
				<div>
					<DropDownList
						availableOptions={services}
						selected={selectedService}
						setSelected={setSelectedService}
					/>
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
