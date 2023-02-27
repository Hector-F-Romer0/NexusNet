import styled from "styled-components";
import logo from '../../assets/logo.png';

const NavBar = styled.div`
	grid-area: navbar;
    background: #5A8FCC;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const NavBarContainerLogo = styled.div`

    display: flex;
    flex-direction: column;
	gap: 10px;
    margin-bottom: 50px;
    
`;

const NavBarContainerIMG = styled.div`

    margin: 5px;
    margin-top: 80px;
    height: 100%;
    background-image: url(${logo});
`;

const NavBarH1 = styled.div`

    margin-left: 10%;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    color: #FFFFFF;

`;

const NavBarContainerH = styled.div`

    display: flex;
    flex-direction: column;
    gap: 60px;

`;

const NavBarH2 = styled.div`

    margin-left: 10%;
	font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #FFFFFF;

`;

export { NavBar, NavBarContainerLogo, NavBarContainerIMG, NavBarH1, NavBarContainerH, NavBarH2 };
