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

const InputStyle = styled.input`
	background-color: #fff;
	min-width: 400px;
	max-width: 600px;
	min-height: 40px;
	font-size: 1rem;
	/* margin: 4% 0; */
	border: #dcdfe4 2px solid;
	padding: 0.5em;
	border-radius: 10px;
`;

const InputContainerStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
	flex-direction: column;
	margin: 0.5em 0;

	label {
		align-self: flex-start;
	}
`;

const InputLabelStyle = styled.label`
	font-weight: 700;
`;

const InputErrorStyle = styled.span`
	color: #ff0000;
	font-weight: 500;
	/* margin-bottom: 1em; */
`;

const FormStyle = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export { TextInput, InputStyle, InputContainerStyle, InputErrorStyle, InputLabelStyle, FormStyle };
