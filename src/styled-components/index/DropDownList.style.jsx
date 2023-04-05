import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const DropDownStyle = styled.div`
	width: 400px;
	margin: 2% auto;
	user-select: none;
	position: relative;
`;

const DropDownBtn = styled.div`
	padding: 15px 20px;
	background-color: #fff;
	box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #333;
	cursor: pointer;
	border-radius: 10px;
	margin: 2% 0;
`;

const DropDownContent = styled.div`
	position: absolute;
	top: 110%;
	left: 0;
	padding: 10px;
	background-color: #fff;
	box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
	font-weight: 700;
	color: #333;
	width: 100%;
	border-radius: 2px;
`;

const DropDownItem = styled.div`
	padding: 10px;
	transition: all 0.2s;

	&:hover {
		background: #f4f4f4;
		cursor: pointer;
	}
`;

const IconDeploy = styled(FiChevronDown)`
	position: absolute;
	font-size: 2rem;
	top: 36px;
	left: 88%;
	pointer-events: none;
	/* left: 100px; */
	/* top: 90px; */
	/* background: #123245; */
`;

export { DropDownStyle, DropDownBtn, DropDownContent, DropDownItem, IconDeploy };
