import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.LIGHT_GRAY};
	height: 60px;
	margin-top: 30px;
`;

const FooterText = styled.h2`
	font-weight: 400;
	font-style: italic;
	margin: 0 70px;
`;

export { StyledFooter, FooterText };
