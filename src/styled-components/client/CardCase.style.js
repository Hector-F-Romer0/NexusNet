import styled from "styled-components";

const CardContainerStyle = styled.div`
	display: flex;
	background-color: #fff;
	flex-direction: column;
	gap: 30px;
	align-items: center;
	justify-content: center;
	margin-top: 3em;
`;

const CardCaseStyle = styled.div`
	background-color: #e8f1ff;
	width: 80%;
	padding: 2.5em;
	border-radius: 12px;
`;

const CaseTitle = styled.h2`
	margin-top: 1%;
	font-size: 2rem;
	font-weight: 700;
`;

const CaseSeparator = styled.hr`
	margin-top: 1.5%;
	background-color: #000;
	border: 0 none;
	color: #000;
	height: 3px;
`;

const CaseDescription = styled.p`
	margin-top: 3%;
	font-size: 1.4rem;
	font-weight: 200;
`;

const CaseDate = styled.span`
	float: right;
	font-size: 1rem;
	font-weight: 200;
	margin-top: 3%;
`;


const CardInfoCaseStyle = styled.div`
`;

const InfoCaseStyle = styled.div`
`;

const CaseUploadsStyle = styled.div`
`;

export { CardContainerStyle, CardCaseStyle, CaseDescription, CaseTitle, CaseDate, CaseSeparator, CardInfoCaseStyle, InfoCaseStyle, CaseUploadsStyle };
