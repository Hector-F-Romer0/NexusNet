import styled from "styled-components";

const GridRateStyle = styled.div`
	display: grid;
	width: 80%;
	background-color: #e8f1ff;
	justify-content: center;
	grid-template-areas: "photo title" "photo rate";
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr 1fr;
	padding: 1em;
`;

const ProviderPhotoStyle = styled.img`
	width: 100%;
	grid-area: photo;
	border-radius: 10px;
`;

const ProviderNameStyle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	/* text-align: center; */
	/* color: #fff; */
`;

export { GridRateStyle, ProviderPhotoStyle, ProviderNameStyle };
