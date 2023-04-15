import styled from "styled-components";
import { size } from "./deviceSizes";

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

const InputStyle = styled.input`
	background-color: #fff;
	/* min-width: 400px; */
	width: 100%;
	max-width: 400px;
	min-height: 40px;
	font-size: 1rem;
	/* margin: 4% 0; */
	border: #dcdfe4 2px solid;
	padding: 0.5em;
	border-radius: 10px;

	@media (max-width: ${size.tablet}) {
		/* min-height: 30px; */
		/* padding: 0.5em; */
		font-size: 0.8rem;
		min-width: 200px;
		/* max-width: 250px; */
	}
`;

const InputContainerStyle = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-wrap: wrap;
	/* gap: 10px; */
	flex-direction: column;
	margin: 1.5em 0;

	label {
		align-self: flex-start;
	}
`;

const InputContainerRowStyle = styled.div`
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	/* gap: 10px; */
	display: grid;
	grid-template-columns: 2fr 3.5fr;
	margin: 0.5em 0;

	label {
		align-self: flex-start;
	}
`;

const InputLabelStyle = styled.label`
	margin: 2% 0;
	font-weight: 700;
`;

const InputErrorStyle = styled.span`
	color: #ff0000;
	font-weight: 500;
	/* margin-bottom: 1em; */
`;

const FormStyle = styled.form`
	/* padding: 3em 2em; */
	/* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
`;

const TextAreaStyle = styled.textarea`
	background-color: #fff;
	min-width: 600px;
	width: 80%;
	min-height: 200px;
	/* max-height: 200px; */
	font-size: 1.2rem;
	border: #dcdfe4 2px solid;
	padding: 0.5em;
	border-radius: 10px;
	resize: none;
`;

export {
	TextInput,
	InputStyle,
	InputContainerStyle,
	InputContainerRowStyle,
	InputErrorStyle,
	InputLabelStyle,
	FormStyle,
	TextAreaStyle,
};
