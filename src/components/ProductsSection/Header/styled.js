import styled from "styled-components";
// Assets
import headerProducts from "assets/images/headerProducts.png";

const StyledHeader = styled.header`
	position: relative;
	width: 100%;
	height: 412px;

	background-image: url(${headerProducts});
	background-size: cover;
	background-position: center right 10%;

	@media (min-width: 768px) {
		width: 95%;

		background-position: center right;
		border-radius: 20px;
	}
`;

const StyledTitle = styled.h1`
	position: absolute;
	top: 60px;
	left: 50px;

	color: #fff;
	font-size: ${props => props.theme.MAIN_TITLE};
	font-weight: 700;

	@media (min-width: 768px) {
		top: unset;
		left: 100px;
		bottom: 60px;
	}
`;

export { StyledHeader, StyledTitle };
