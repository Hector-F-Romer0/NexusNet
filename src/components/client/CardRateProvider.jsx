import React from "react";
import {
	GridRateStyle,
	ProviderPhotoStyle,
	ProviderNameStyle,
} from "../../styled-components/client/RateProvider.style";
import { FlexCenterColumnLayout } from "../../styled-components/index/Layout";
import photoProvider3 from "../../assets/Provider3.jpg";
import Star from "../shared/Star";
import StarContainer from "../shared/StarContainer";

const CardRateProvider = () => {
	return (
		<FlexCenterColumnLayout>
			<GridRateStyle>
				<ProviderPhotoStyle src={photoProvider3} alt="Provider photo" />

				<ProviderNameStyle>Isabella Manos de Alicate</ProviderNameStyle>
				<StarContainer />
			</GridRateStyle>
			<div>
				<input type="text" />
				<button>Send information</button>
			</div>
		</FlexCenterColumnLayout>
	);
};

export default CardRateProvider;
