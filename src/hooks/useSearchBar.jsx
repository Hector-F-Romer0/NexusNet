import { useEffect, useState } from "react";

export const useSearchBar = (initialData) => {
	const [initialValues, setInitialValues] = useState(initialData);
	const [searchResults, setSearchResults] = useState([]);
	const [inputSearch, setInputSearch] = useState("");

	const handleChange = (e) => {
		setInputSearch(e.target.value);
	};

	useEffect(() => {
		filterResults();
	}, [inputSearch]);

	const filterResults = () => {
		// console.log(inputSearch);
		if (!inputSearch) {
			setSearchResults(initialValues);
		} else {
			const result = searchResults.filter((element) => {
				if (element?.username.toLowerCase().includes(inputSearch.toLowerCase())) {
					return element;
				}
			});
			setSearchResults(result);
		}
	};

	return {
		searchResults,
		handleChange,
	};
};
