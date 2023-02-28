import React from "react";
import {
	GridRateStyle,
	ProviderPhotoStyle,
	ProviderNameStyle,
	InstructionsStyle,
} from "../../styled-components/client/RateProvider.style";
import { FlexCardLayout, FlexCenterColumnLayout } from "../../styled-components/index/Layout";
import photoProvider3 from "../../assets/Provider3.jpg";
import StarContainer from "../shared/StarContainer";
import { ButtonStyle } from "../../styled-components/index/button.style";
import { TextInput } from "../../styled-components/client/Input.style";

const CardRateProvider = () => {
	return (
		<FlexCenterColumnLayout>
			<GridRateStyle>
				<ProviderPhotoStyle src={photoProvider3} alt="Provider photo" />
				<ProviderNameStyle>Isabella Manos de Alicate</ProviderNameStyle>
				<StarContainer />
			</GridRateStyle>
			<FlexCardLayout>
				<InstructionsStyle>Type your experience with this provider.</InstructionsStyle>
				<TextInput placeholder="His/her work was spectacular..." />
				<ButtonStyle>Send information</ButtonStyle>
			</FlexCardLayout>
		</FlexCenterColumnLayout>
	);
};

export default CardRateProvider;
