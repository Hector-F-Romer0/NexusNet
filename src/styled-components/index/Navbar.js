import styled from "styled-components";

const NavBarContainerLogo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
`;

const NavBarContainerIMG = styled.img`
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	/* border-radius: 15px; */
`;

const NavBarH1 = styled.h1`
	font-weight: 800;
	font-size: 2.2rem;
	text-align: center;
	color: #ffffff;
`;

const NavBarContainerTitles = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2em;
	margin-right: 1em;
	gap: 35px;
`;

const NavBarTitle = styled.h2`
	margin-left: 10%;
	font-style: normal;
	font-weight: 700;
	font-size: 1.6rem;
	color: #ffffff;
`;

export { NavBarContainerLogo, NavBarContainerIMG, NavBarH1, NavBarContainerTitles, NavBarTitle };
