import styled from "styled-components";

const TextInput = styled.input.attrs((props) => ({ type: "text", placeholder: props.placeholder || "Text" }))`
	background-color: #fff;
	min-width: 400px;
	width: 80%;
	min-height: 70px;
	font-size: 1.2rem;
	margin: 4% 0;
	border: #dcdfe4 2px solid;
	padding: 0.5em;
	border-radius: 10px;
`;

export { TextInput };
