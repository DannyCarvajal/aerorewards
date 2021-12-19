import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 60px;

	padding: 0.5rem 1rem;

	background-color: ${({ theme }) => theme.LIGHT_GRAY};

	@media (min-height: 812px) {
		position: absolute;
		bottom: 0;
	}
`;

const FooterText = styled.h2`
	margin: 0 10%;

	font-weight: 400;
	font-style: italic;
`;

export { StyledFooter, FooterText };
