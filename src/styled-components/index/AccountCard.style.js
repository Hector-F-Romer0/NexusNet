import styled from "styled-components";

const AccountCardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 300px;
`;

const AccountCardClientStyle = styled.div`
	background-color: #e8f1ff;
	width: 1400px;
    height: 850px;
	border-radius: 10px;
    display: grid;
    grid-template-columns: 2fr 3.5fr;
`;

const AccountContainerDescription = styled.div`
	margin: 15%;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const AccountImage = styled.img`
    width: 60%;
    margin-left: 15%;
    margin-right: auto;
    border-radius: 15px;
`;

const AccountDescription = styled.p`
	margin-top: 3%;
	font-size: 1.4rem;
	font-weight: 200;
`;

const AccountContainerInfo = styled.div`
`;

const AccountTitle = styled.h2`
	margin-top: 70px;
	font-size: 3.5rem;
	font-weight: 700;
`;

const AccountSeparator = styled.hr`
	margin-top: 1.5%;
    margin-right: 5.5%;
	background-color: #000;
	border: 0 none;
	color: #000;
	height: 3px;
`;

const AccountContainerP = styled.div`
	margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

const AccountInfo = styled.h2`
	margin-top: 1%;
	font-size: 2rem;
	font-weight: 400;
`;



export { AccountContainerDescription, AccountContainerInfo, AccountContainerP, AccountImage, AccountInfo, AccountCardContainer, AccountCardClientStyle, AccountTitle, AccountSeparator, AccountDescription };
