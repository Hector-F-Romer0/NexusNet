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
			<span>{data?.name}</span>
			{canDelete && <FiX onClick={(e) => deleteKeyWord(data.id)} />}
		</>
	);
};

export default KeyWord;
