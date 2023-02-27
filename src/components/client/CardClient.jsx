import React from "react";
import {
	CardClientStyle,
	CaseDate,
	CaseDescription,
	CaseSeparator,
	CaseTitle,
} from "../../styled-components/index/ClientCard.style";
import { TagContainerStyle } from "../../styled-components/index/Tags.style";

import Tag from "../shared/Tag";

const CardClient = () => {
	return (
		<CardClientStyle>
			<TagContainerStyle>
				<Tag title="Health" variant="category" />
				<Tag title="Biomedical engineering" variant="service" />
			</TagContainerStyle>
			<CaseTitle>Title case</CaseTitle>
			<CaseSeparator />
			<CaseDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati tempora dicta, pariatur
				sed temporibus aliquid corporis laboriosam eaque natus dolorum esse modi distinctio asperiores eius
				voluptate illum deleniti possimus?
			</CaseDescription>
			<CaseDate>Taken on dd/mm/yy</CaseDate>
		</CardClientStyle>
	);
};

export default CardClient;
