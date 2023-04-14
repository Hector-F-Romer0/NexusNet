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

const CardAccount = () => {
	return (
		<AccountCardContainer>
			<h1>Account card</h1>
			{/* <AccountCardClientStyle>
				<AccountContainerDescription>
					<AccountImage src={imgClient}></AccountImage>
					<AccountTitle>Client</AccountTitle>
					<AccountDescription>
						Morbi gravida leo in ipsum viverra, ut tempor lorem fermentum. Etiam quis turpis viverra,
						fringilla turpis quis, tincidunt nulla. Praesent efficitur lorem at cursus tincidunt.
					</AccountDescription>
				</AccountContainerDescription>
				<AccountContainerInfo>
					<AccountTitle>Pedro Manos Tijeras</AccountTitle>
					<AccountSeparator></AccountSeparator>
					<AccountContainerP>
						<AccountInfo>Email: pedromanostijeras@example.com</AccountInfo>
						<AccountInfo>Phone number: 317 000 0000</AccountInfo>
						<AccountInfo>Country: Colombia</AccountInfo>
						<AccountInfo>State: Boyacá</AccountInfo>
						<AccountInfo>City: Sogamoso</AccountInfo>
					</AccountContainerP>
				</AccountContainerInfo>
			</AccountCardClientStyle> */}
		</AccountCardContainer>
	);
};

export default CardAccount;
