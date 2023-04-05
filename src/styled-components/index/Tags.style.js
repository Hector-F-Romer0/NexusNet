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

const KeyWordStyle = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	background: #d0e3f1;
	border-radius: 50px;
	min-width: 70px;
	padding: 1em 1em;
	gap: 10px;
	justify-content: space-between;
	height: 25px;
	font-weight: 700;
	font-size: 0.8rem;
	color: #2c5877;

	svg {
		font-size: 1.2rem;
		cursor: pointer;
	}
`;

const TagContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	flex-wrap: wrap;
`;

const KeyWordsContainerStyle = styled.div`
	display: flex;
	flex-direction: row;

	gap: 20px;
	flex-wrap: wrap;
	margin-bottom: 4%;
`;

export { TagStyle, KeyWordStyle, TagContainerStyle, KeyWordsContainerStyle };
