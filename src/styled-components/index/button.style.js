import styled from "styled-components";

const ButtonStyle = styled.button`
	background: #ededed;
	border-radius: 10px;
	min-width: 350px;
	/* padding: 1em; */
	height: 60px;
	font-style: normal;
	font-weight: 700;
	font-size: 1.5rem;
	color: #2a4c73;
	border: none;
	margin: 3% 0;
`;

const ButtonContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 100px;
`;

export { ButtonContainerStyle, ButtonStyle };
