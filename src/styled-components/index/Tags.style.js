import styled from "styled-components";

const TagStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => (props.variant === "category" ? "#227fc2" : "#2B5E99")};
	border-radius: 50px;
	min-width: 150px;
	padding: 1em;
	/* width: 150px; */
	height: 35px;
	font-style: normal;
	font-weight: 700;
	font-size: 1.2rem;
	color: #ffffff;
`;

const TagContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	flex-wrap: wrap;
`;

export { TagStyle, TagContainerStyle };
