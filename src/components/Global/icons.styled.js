import styled from "styled-components";
// Assets
import arrowRight from "assets/icons/arrowRight.svg";
import arrowLeft from "assets/icons/arrowLeft.svg";

const CheckIcon = styled.i.attrs({
	className: "fas fa-check",
})``;

const CancelIcon = styled.i.attrs({
	className: "fas fa-times",
})``;

const ArrowRight = styled.img.attrs({
	src: arrowRight,
	alt: "arrow right",
})`
	cursor: pointer;
	width: 46px;
	height: 46px;
`;

const ArrowLeft = styled.img.attrs({
	src: arrowLeft,
	alt: "arrow left",
})`
	cursor: pointer;
	width: 46px;
	height: 46px;
`;

export { CheckIcon, CancelIcon, ArrowRight, ArrowLeft };
