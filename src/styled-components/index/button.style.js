import styled from "styled-components";

const ButtonStyle = styled.button`
	background: #ededed;
	border-radius: 10px;
	min-width: 150px;
	max-width: 600px;
	cursor: pointer;
	padding: 0.5em 1em;
	height: 70px;
	font-weight: 700;
	font-size: 1.5rem;
	color: #2a4c73;
	border: none;
	margin: 3% 0;
	transition: all ease-in-out 0.4s;
`;

const PrimaryButtonStyle = styled(ButtonStyle)`
	background-color: #2e61e7;
	color: #fff;

	&:hover {
		background-color: #4372f5;
	}
`;

const DeleteButtonStyle = styled(ButtonStyle)`
	background-color: #e72e2e;
	color: #fff;

	&:hover {
		background-color: #f74340;
	}
`;

const ButtonContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 100px;
`;

export { ButtonContainerStyle, ButtonStyle, PrimaryButtonStyle, DeleteButtonStyle };
