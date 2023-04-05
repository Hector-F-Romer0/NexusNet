import React from "react";

import { KeyWordsContainerStyle } from "../../styled-components/index/Tags.style";
import KeyWord from "./KeyWord";

const ContainerTagKeywords = ({ keywords, setKeyWords }) => {
	return (
		<KeyWordsContainerStyle>
			{keywords.map(
				(keyword) =>
					keyword?.id !== 0 && (
						<KeyWord
							key={keyword.id}
							data={keyword}
							keywords={keywords}
							setKeyWords={setKeyWords}
							canDelete={true}
						/>
					)
			)}
		</KeyWordsContainerStyle>
	);
};

export default ContainerTagKeywords;
