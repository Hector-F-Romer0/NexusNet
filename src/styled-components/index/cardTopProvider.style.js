import styled from "styled-components";

const CardTopProvidersStyle = styled.div`
    display: flex;
	flex-direction: row;
    gap: 0;	
    background-color: #e8f1ff;
	width: 80%;
	padding: 0.5em;
	border-radius: 12px;
    align-items: center;
`;

const ProviderPhotoCard = styled.img`
	width: 20%;
	border-radius: 15px;
	margin: 20px;
`;

const NameProviderCard = styled.h2`
	margin: 20px;
	font-size: 2.5rem;
	font-weight: 700;
`;

export { CardTopProvidersStyle, ProviderPhotoCard, NameProviderCard};
