import React from "react";
import {
	CardTopProvidersStyle,
	NameProviderCard,
	ProviderPhotoCard,
} from "../../styled-components/index/cardTopProvider.style";
import StarContainer from "./StarContainer";
import photoProvider1 from "../../assets/Provider1.jpg";

const CardTopProvider = ({ data }) => {
	console.log(data);
	return (
		<CardTopProvidersStyle>
			<ProviderPhotoCard src={photoProvider1}></ProviderPhotoCard>
			<NameProviderCard> {data.name} </NameProviderCard>
			<StarContainer margin-rigth="auto"></StarContainer>
			<h2> {data.rate} </h2>
		</CardTopProvidersStyle>
	);
};

export default CardTopProvider;
