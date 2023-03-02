import React from "react";
import Tag from "./Tag";
import { TagContainerStyle } from "../../styled-components/index/Tags.style";

const ContainerTag = () => {
	return (
		<TagContainerStyle>
			<Tag></Tag>
			<Tag></Tag>
		</TagContainerStyle>
	);
};

export default ContainerTag;
