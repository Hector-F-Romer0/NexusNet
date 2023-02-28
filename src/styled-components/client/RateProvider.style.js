import styled from "styled-components";

const GridRateStyle = styled.div`
	display: grid;
	width: 80%;
	background-color: #e8f1ff;
	justify-content: center;
	grid-template-areas: "photo title" "photo rate";
	grid-template-columns: 212px 1fr;
	grid-template-rows: 1fr 1fr;
	padding: 3em;
`;

const ProviderPhotoStyle = styled.img`
	width: 100%;
	grid-area: photo;
	border-radius: 10px;
	/* text-align: center; */
	margin-left: auto;
	margin-right: auto;
`;

const ProviderNameStyle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
`;

const InstructionsStyle = styled.h3`
	/* margin-top: 3%; */
	text-align: left;
	font-weight: 400;
`;

export { GridRateStyle, ProviderPhotoStyle, ProviderNameStyle, InstructionsStyle };
