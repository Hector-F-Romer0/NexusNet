import React from "react";
import {
	CardCaseStyle,
	CaseDate,
	CaseDescription,
	CaseSeparator,
	CaseTitle,
} from "../../styled-components/client/CardCase.style";
import { TagContainerStyle } from "../../styled-components/index/Tags.style";

import Tag from "./Tag";

const CardCase = () => {
	return (
		<CardCaseStyle>
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
		</CardCaseStyle>
	);
};

export default CardCase;
