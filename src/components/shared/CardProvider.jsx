import React from "react";
import { GridRateStyle, ProviderPhotoStyle } from "../../styled-components/client/RateProvider.style";
import InfoCardProvider from "./InfoCardProvider";
import provider from "../../assets/imgClient.jpg";

const CardProvider = () => {
	return (
		<GridRateStyle>
			<ProviderPhotoStyle src={provider}></ProviderPhotoStyle>
			<InfoCardProvider></InfoCardProvider>
		</GridRateStyle>
	);
};

export default CardProvider;
