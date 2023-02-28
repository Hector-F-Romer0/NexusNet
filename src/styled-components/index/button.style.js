import styled from "styled-components";

const ButtonClientStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #EDEDED;
	border-radius: 10px;
	min-width: 350px;
	/* padding: 1em; */
	height: 60px;
	font-style: normal;
	font-weight: 700;
	font-size: 1.5rem;
	color: #2A4C73;
`;

const ButtonContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
    justify-content: center;
	gap: 100px;
`;

export { ButtonContainerStyle, ButtonClientStyle };