import styled from "styled-components";

const Layout = styled.div`
	display: grid;
	min-height: 100vh;
	grid-template-areas: "logo form";
	grid-template-rows: 100%;
	grid-template-columns: 1fr 1fr;
`;

const LogoLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
	grid-area: logo;
	background: #5a8fcc;
	height: 100%;
	/* top: 0; */
`;

const FormContentLayout = styled.div`
	grid-area: form;
	height: 100%;
`;

const ContainerSignInLayout = styled.div`
	display: flex;
	background: #3c6d2d;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 400px;
	margin: 0 auto;
	width: 600px;
`;

const FlexCardLayout = styled.div`
	background-color: #e8f1ff;
	width: 80%;
	border-radius: 10px;
	/* padding: 1em; */
`;

export { Layout, LogoLayout, FormContentLayout, ContainerSignInLayout };
