import styled from "styled-components";

const Layout = styled.div`
	display: grid;
	min-height: 100vh;
	grid-template-areas: "navbar main";
	grid-template-rows: 100%;
	grid-template-columns: minmax(200px, 300px) 1fr;
`;

const NavBarLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
	grid-area: navbar;
	background: #5a8fcc;
	height: 100vh;
	top: 0;
	position: sticky;
`;

const MainContentLayout = styled.div`
	grid-area: main;
`;

const FlexCenterColumnLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const FlexCardLayout = styled(FlexCenterColumnLayout)`
	background-color: #e8f1ff;
	width: 80%;
	border-radius: 10px;
	/* padding: 1em; */
`;

export { Layout, MainContentLayout, NavBarLayout, FlexCenterColumnLayout, FlexCardLayout };
