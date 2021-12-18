import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 60px;

	margin-top: 30px;
	padding: 0.5rem 1rem;

	background-color: ${({ theme }) => theme.LIGHT_GRAY};
`;

const FooterText = styled.h2`
	margin: 0 10%;

	font-weight: 400;
	font-style: italic;
`;

export { StyledFooter, FooterText };
