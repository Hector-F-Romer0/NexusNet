import React from "react";
import {
	AccountContainerDescription,
	AccountContainerInfo,
	AccountContainerP,
	AccountImage,
	AccountInfo,
	AccountCardContainer,
	AccountCardClientStyle,
	AccountTitle,
	AccountSeparator,
	AccountDescription,
} from "../../styled-components/index/AccountCard.style";
import imgClient from "../../assets/imgClient.jpg";
import StarContainer from "../shared/StarContainer";

const ProviderViewCardAccount = () => {
	return (
		<AccountCardContainer>
			<AccountCardClientStyle>
				<AccountContainerDescription>
					<AccountImage src={imgClient}></AccountImage>
					<AccountTitle>Provider</AccountTitle>
					<StarContainer></StarContainer>
					<AccountDescription>
						Morbi gravida leo in ipsum viverra, ut tempor lorem fermentum. Etiam quis turpis viverra,
						fringilla turpis quis, tincidunt nulla. Praesent efficitur lorem at cursus tincidunt.
					</AccountDescription>
				</AccountContainerDescription>
				<AccountContainerInfo>
					<AccountTitle>Enrique Manos Cuchillas</AccountTitle>
					<AccountSeparator></AccountSeparator>
					<AccountContainerP>
						<AccountInfo>Email: enriquemcuchillas@example.com</AccountInfo>
						<AccountInfo>Phone number: 320 000 0000</AccountInfo>
						<AccountInfo>Country: Colombia</AccountInfo>
						<AccountInfo>State: Santander</AccountInfo>
						<AccountInfo>City: Barrancabermeja</AccountInfo>
					</AccountContainerP>
				</AccountContainerInfo>
			</AccountCardClientStyle>
		</AccountCardContainer>
	);
};

export default ProviderViewCardAccount;