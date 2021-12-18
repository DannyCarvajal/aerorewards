import styled from "styled-components";

const SpinsLeftContainer = styled.div`
	background: rgba(228, 154, 23, 0.5);
	border-radius: 10px 0px 0px 10px;
`;

const SpinsLeftText = styled.p`
	color: #fff;
	margin: auto;
	font-size: ${({ theme }) => theme.MEDIUM};
	font-weight: bold;
	font-style: italic;
`;

export { SpinsLeftContainer, SpinsLeftText };
