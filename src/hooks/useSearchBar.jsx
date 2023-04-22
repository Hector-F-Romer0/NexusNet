import { useEffect, useState } from "react";

export const useSearchBar = (initialData, factorToSearch) => {
	const [initialValues, setInitialValues] = useState(initialData);
	const [searchResults, setSearchResults] = useState([]);
	const [inputSearch, setInputSearch] = useState("");

	const handleChange = (e) => {
		setInputSearch(e.target.value);
	};

	useEffect(() => {
		setSearchResults(initialData);
	}, [initialData]);

	useEffect(() => {
		filterResults();
	}, [inputSearch]);

	const filterResults = () => {
		// console.log(inputSearch);
		if (!inputSearch) {
			setSearchResults(initialValues);
		} else {
			const result = searchResults.filter((element) => {
				if (element[factorToSearch]?.toLowerCase().includes(inputSearch?.toLowerCase())) {
					return element;
				}
			});
			setSearchResults(result);
		}
	};

	return {
		initialValues,
		searchResults,
		setSearchResults,
		handleChange,
		inputSearch,
	};
};
