import styled from "styled-components";
import arrowRight from "assets/icons/arrowRight.svg";

const StyledMenu = styled.div`
	width: 90%;
	max-width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
	height: fit-content;
	align-items: center;
	border-bottom: 1px solid #d9d9d9;

	@media (min-width: 768px) {
		width: 85%;
		height: 100px;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const ArrowRight = styled.img.attrs({
	src: arrowRight,
	alt: "arrow right",
})`
	cursor: pointer;
	width: 46px;
	height: 46px;
	margin-left: auto;
`;

export { StyledMenu, ArrowRight };
