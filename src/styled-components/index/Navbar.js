import styled from "styled-components";

const NavBar = styled.div`
	grid-area: navbar;
    background: #5A8FCC;
    display: block;
    flex-direction: column;
    height: 100%;
    position: fixed;
    top:0;
    width:400px;

`;

const NavBarContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
	gap: 10px;
    margin-bottom: 50px;
`;

const NavBarContainerIMG = styled.img`
    margin: 10% auto 0 auto;
    width: 40%;
    border-radius: 15px;
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
    gap: 50px;
`;

const NavBarH2 = styled.div`
    margin-left: 10%;
	font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #FFFFFF;
`;

export { NavBar, NavBarContainerLogo, NavBarContainerIMG, NavBarH1, NavBarContainerH, NavBarH2 };
