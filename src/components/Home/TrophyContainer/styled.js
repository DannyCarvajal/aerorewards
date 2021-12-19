import styled from "styled-components";

import trophy from "assets/icons/trophy.svg";

const TrophyContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;

	background-color: rgba(10, 212, 250, 0.11);

	@media (min-width: 768px) {
		width: 40%;
		height: 600px;
	}
`;

const TrophyImageStyled = styled.img.attrs({
	src: trophy,
	alt: "Trophy",
})`
	width: 30%;
	height: auto;

	padding: 20px;

	@media (min-width: 768px) {
		width: 60%;
	}
`;

export { TrophyContainerStyled, TrophyImageStyled };
