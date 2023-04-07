import styled from "styled-components";
import { size } from "./deviceSizes";

const Layout = styled.div`
	display: grid;
	width: 85%;
	grid-template-areas: "logo form";
	grid-template-columns: 1fr 1fr;
	background-color: #e8f1ff;
	border-radius: 10px;
	padding: 4em 3em;
	/* margin: 20vh auto; */

	@media (max-width: ${size.tablet}) {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 2em 3em;
		/* height: ; */
	}
`;

const LogoLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3em;
	grid-area: logo;
	padding: 2em 2em;
	align-items: center;

	h1 {
		font-size: 3.5rem;
	}

	h2 {
		font-size: 1rem;
	}

	@media (max-width: ${size.tablet}) {
		gap: 1em;
		/* padding: 1em; */
		/* margin-top: 10px; */
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 0.8rem;
		}
	}
`;

const FormContentLayout = styled.div`
	grid-area: form;
	padding: 2em 1em;

	button {
		/* display: flex;
        align-items: center;
        justify-content: center; */
		margin-top: 1em;
	}

	@media (max-width: ${size.tablet}) {
		padding: 0;
	}
`;

const CenterCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* background-color: #bf3bdd; */
	height: 100vh;
`;

const SignInButtons = styled.div`
	margin: 1em 0;
	display: flex;
	justify-content: start;
	/* */
	flex-direction: column;
	gap: 1em;

	@media (max-width: ${size.tablet}) {
		/* justify-content: center; */
		/* margin: 0 auto; */
		/* justify-content: center; */
		align-items: center;
		/* margin: 0 auto; */
	}
`;

export { Layout, LogoLayout, FormContentLayout, CenterCard, SignInButtons };
