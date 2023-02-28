import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StarStyle = styled(FaStar)`
	/* width: 100%; */
	font-size: 4em;
	stroke-width: 1;
	stroke-opacity: 0;
	fill: #d1d5db;

	&:hover {
		fill: #ffcb45;
	}
`;

const StartRateContainerStyle = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
	justify-content: center;
	align-items: center;
	height: 70px;
`;

export { StarStyle, StartRateContainerStyle };
