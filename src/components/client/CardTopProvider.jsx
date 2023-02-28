import React from "react";
import { CardTopProvidersStyle, NameProviderCard, ProviderPhotoCard } from "../../styled-components/index/cardTopProvider.style";
import StarContainer from "../shared/StarContainer";
import photoProvider1 from "../../assets/Provider1.jpg";

const CardTopProvider = () => {
	return (
            <CardTopProvidersStyle>
                <ProviderPhotoCard src={photoProvider1}></ProviderPhotoCard>
                <NameProviderCard>Enrique Manos Cuchillas</NameProviderCard>
                <StarContainer margin-rigth="auto"></StarContainer>
            </CardTopProvidersStyle>
	);
};

export default CardTopProvider;
