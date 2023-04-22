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
	const { allCases } = useSelector((state) => state.cases);
	const { services } = useSelector((state) => state.services);
	const dispatch = useDispatch();
	const { initialValues, searchResults, setSearchResults, handleChange } = useSearchBar(allCases, "caseTitle");
	console.log(allCases);

	return (
		<section className="flex">
			<ContainerSideBar>
				<SideBar />
			</ContainerSideBar>
			<div className="w-full mb-20">
				<h1 className="text-xl md:text-4xl font-bold text-center my-9">Search a case</h1>
				<div className="w-3/4 mx-auto my-4">
					<SearchBar handleChange={handleChange} />
				</div>
				{/* Mustra todos los casos que no han sido tomados */}
				<div className="flex flex-col items-center justify-center flex-wrap gap-11 mb-5">
					{searchResults
						.filter((caseClient) => caseClient?.takenBy === null)
						?.map((caseClient) => (
							<CardCase key={caseClient.id} data={caseClient} />
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
