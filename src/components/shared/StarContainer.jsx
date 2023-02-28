import React from "react";
import { StartRateContainerStyle } from "../../styled-components/index/Stars.style";
import Star from "./Star";

const StarContainer = () => {
	return (
		<StartRateContainerStyle>
			<Star />
			<Star />
			<Star />
			<Star />
			<Star />
		</StartRateContainerStyle>
	);
};

export default StarContainer;
