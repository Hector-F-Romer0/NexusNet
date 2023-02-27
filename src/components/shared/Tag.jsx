import React from "react";
import { TagStyle } from "../../styled-components/index/Tags.style";

const Tag = ({ title, variant }) => {
	return <TagStyle variant={variant}>{title}</TagStyle>;
};

export default Tag;
