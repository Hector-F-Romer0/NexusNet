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
import { PrimaryButtonStyle } from "../../styled-components/index/Button.style";
import { TextInput } from "../../styled-components/client/Input.style";

const CardRateProvider = () => {
	return (
		<FlexCenterColumnLayout>
			<FlexCardLayout>
				<GridRateStyle>
					<ProviderPhotoStyle src={photoProvider3} alt="Provider photo" />
					<ProviderNameStyle>Isabella Manos de Alicate</ProviderNameStyle>
					<StarContainer />
				</GridRateStyle>
				<InstructionsStyle>Type your experience with this provider.</InstructionsStyle>
				<TextInput placeholder="His/her work was spectacular..." />
				<PrimaryButtonStyle>Send information</PrimaryButtonStyle>
			</FlexCardLayout>
		</FlexCenterColumnLayout>
	);
};

export default CardRateProvider;
