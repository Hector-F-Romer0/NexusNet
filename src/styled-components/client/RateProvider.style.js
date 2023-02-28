import styled from "styled-components";

const GridRateStyle = styled.div`
	display: grid;
	width: 80%;
	justify-content: center;
	grid-template-areas: "photo title" "photo rate";
	grid-template-columns: minmax(150px, 212px) auto;
	grid-template-rows: auto auto;
	padding: 2em 1em;
	column-gap: 6em;
`;

const ProviderPhotoStyle = styled.img`
	width: 100%;
	grid-area: photo;
	border-radius: 10px;
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
