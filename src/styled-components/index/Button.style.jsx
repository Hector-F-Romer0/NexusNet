import styled from "styled-components";

const ButtonGenericStyle = styled.button`
	background-color: #ededed;
	border-radius: 10px;
	min-width: 150px;
	max-width: 400px;
	cursor: pointer;
	padding: 0.5em 1em;
	height: 50px;
	font-weight: 700;
	font-size: 1.1rem;
	color: #2a4c73;
	border: none;
	/* margin: 3% 0; */
`;

const PrimaryButtonStyle = styled(ButtonGenericStyle)`
	/* background-color: #2e61e7;
	color: #fff;

	&:hover {
		background-color: #4372f5;
	} */
`;

const DeleteButtonStyle = styled(ButtonGenericStyle)`
	/* background-color: #e72e2e;
	color: #fff;

	&:hover {
		background-color: #f74340;
	} */
`;

const ButtonContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 40px;
`;

export { ButtonContainerStyle, ButtonGenericStyle, PrimaryButtonStyle, DeleteButtonStyle };
