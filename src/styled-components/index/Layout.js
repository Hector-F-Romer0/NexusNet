import styled from "styled-components";

const Layout = styled.div`
	display: grid;
	min-height: 100vh;
	grid-template-areas: "navbar main";
	grid-template-rows: 100%;
	grid-template-columns: 1.5fr 5fr;
`;

const NavBarLayout = styled.div`
	grid-area: navbar;
`;

const MainContentLayout = styled.div`
	grid-area: main;
`;

export { Layout, MainContentLayout, NavBarLayout };
