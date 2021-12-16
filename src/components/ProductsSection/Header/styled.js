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
		border-radius: 20px;
		background-position: center right;
	}
`;

const StyledTitle = styled.h1`
	font-size: ${props => props.theme.MAIN_TITLE};
	font-weight: 700;
	color: #fff;
	position: absolute;
	top: 60px;
	left: 50px;

	@media (min-width: 768px) {
		top: unset;
		bottom: 60px;
		left: 100px;
	}
`;

export { StyledHeader, StyledTitle };
