import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
	const dispatch = useDispatch();

	const { searchResults, handleChange } = useSearchBar(providers);

	const [selectedService, setSelectedService] = useState({
		id: services[0]?.id,
		name: services[0]?.name,
	});
	console.log(providers);

	useEffect(() => {
		dispatch(getServices());
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
