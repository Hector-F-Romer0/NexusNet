import styled from "styled-components";
import { size } from "./deviceSizes";

const LayoutSignUpStyle = styled.div`
	width: 85%;
	background-color: #e8f1ff;
	border-radius: 10px;
	padding: 4em 3em;

	h1 {
		font-size: 3.5rem;
	}

	h2 {
		font-size: 1rem;
	}
`;

const FormSignUpStyle = styled.form`
	display: grid;
	grid-template-areas: "emailField emailField" "username password" "button button";
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	padding: 0 3em;

	& > div {
		padding-left: 1em;
		padding-bottom: 1em;
	}

	& > div:nth-child(1) {
		grid-area: emailField;
	}

	& > div:nth-child(2) {
		grid-area: username;
    }

& > div:nth-child(3) {
    grid-area: password;
}
`;

const HeaderSignUpStyle = styled.div`
display: flex;
flex-direction: row;
/* background-color: #243ab5; */

img {
    width: 20%;
}

& > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
}

& > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
}
`;

const ButtonSubmitLayoutStyle = styled.div`
display: flex;
/* background-color: #50979f; */
flex-direction: column;
align-items: center;
gap: 20px;
/* margin: 10px; */
/* justify-content: center; */
`;

export { LayoutSignUpStyle, FormSignUpStyle, HeaderSignUpStyle, ButtonSubmitLayoutStyle };