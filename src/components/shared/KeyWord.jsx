import React from "react";
import { FiX } from "react-icons/fi";

const KeyWord = ({ data, canDelete, setKeyWords, keywords }) => {
	const deleteKeyWord = (value) => {
		// console.log(id);
		const keyWordsFiltered = keywords.filter((item) => item.value !== value);
		setKeyWords(keyWordsFiltered);
	};

	return (
		<p className="text-sm items-center text-center font-bold leading-sm py-1 px-6 my-1 mx-1 bg-keyTag w-fit rounded-full text-keywordText relative flex flex-row gap-2 align-middle">
			{data?.label}
			{canDelete && (
				<span className="cursor-pointer text-lg">
					<FiX onClick={(e) => deleteKeyWord(data?.value)} />
				</span>
			)}
		</p>
	);
};

export default KeyWord;
