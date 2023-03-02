import React from "react";
import { CaseDate, CaseSeparator } from "../../styled-components/client/CardCase.style";
import { TagContainerStyle } from "../../styled-components/index/Tags.style";
import Tag from "./Tag";
import { InfoCaseStyle } from "../../styled-components/client/CardCase.style";

const InfoCase = () => {
	return (
		<InfoCaseStyle>
			<h1>Tittle case</h1>
			<CaseSeparator></CaseSeparator>
			<TagContainerStyle>
				<Tag></Tag>
				<Tag></Tag>
			</TagContainerStyle>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis hendrerit efficitur. Fusce id
				nunc pellentesque, placerat purus ut, aliquet risus. Quisque vulputate cursus euismod. Nullam a mattis
				nunc, eget posuere purus. Quisque sed quam at velit pretium tincidunt. Aliquam efficitur lacus elit, ac
				sollicitudin nibh mollis sed. Vestibulum elit quam, lobortis eget diam at, cursus luctus erat.
				Vestibulum mollis volutpat nisi, at accumsan elit tristique vel. Aliquam fermentum euismod viverra. Duis
				vitae nunc nunc. Nulla scelerisque lacus rutrum nibh condimentum, vitae finibus orci ullamcorper.
				Maecenas ornare sem faucibus turpis faucibus sagittis. Morbi vehicula velit nisl, a cursus ante
				porttitor non. Praesent vitae cursus metus. Suspendisse potenti. Duis non lorem in purus convallis
				euismod mollis sed magna. Proin consequat nisl felis, non molestie mauris congue in. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hendrerit nec sapien
				sit amet posuere. Nam lacinia, urna in placerat facilisis, velit lacus varius ex, sed gravida massa
				libero et tortor. In hac habitasse platea dictumst. Etiam vitae massa sem. Proin rhoncus laoreet sapien
				id porttitor. Praesent facilisis tellus id fermentum bibendum. Class aptent taciti sociosqu ad litora
				torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in
				faucibus.
			</p>
			<TagContainerStyle>
				<Tag></Tag>
				<Tag></Tag>
				<Tag></Tag>
			</TagContainerStyle>
			<CaseDate> Taken on dd/mm/yy </CaseDate>
			<CaseSeparator></CaseSeparator>
		</InfoCaseStyle>
	);
};

export default InfoCase;
