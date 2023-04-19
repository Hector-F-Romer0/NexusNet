import React from "react";
import { KeyWordStyle } from "../../styled-components/index/Tags.style";
import { FiX } from "react-icons/fi";

const KeyWord = ({ data, setKeyWords, keywords, canDelete }) => {
	const deleteKeyWord = (id) => {
		console.log(id);
		const keyWordsFiltered = keywords.filter((item) => item.id !== id);
		setKeyWords(keyWordsFiltered);
	};

	return (
		<>
			<p className="text-sm items-center text-center font-bold leading-sm py-1 px-6 my-1 mx-1 bg-keyTag w-fit rounded-full text-keywordText">
				{data?.name}
				<span>{canDelete && <FiX onClick={(e) => deleteKeyWord(data.id)} />}</span>
			</p>
		</>
	);
};

export default KeyWord;
