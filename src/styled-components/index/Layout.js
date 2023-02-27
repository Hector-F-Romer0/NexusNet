import styled from "styled-components";

const Layout = styled.div`
	display: grid;
	grid-template-areas: "navbar main";
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 5fr;
`;

const NavBarLayout = styled.div`
	font-size: 0.3rem;
	background-color: #666666;
	grid-area: navbar;
`;

const MainContentLayout = styled.div`
	font-size: 2rem;
	background-color: #7dcde8;
	grid-area: main;
`;

export { Layout, MainContentLayout, NavBarLayout };
