import styled from "styled-components";

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
	width: 46px;
	height: 46px;

	cursor: pointer;
`;

const ArrowLeft = styled.img.attrs({
	src: arrowLeft,
	alt: "arrow left",
})`
	width: 46px;
	height: 46px;

	cursor: pointer;
`;

export { CheckIcon, CancelIcon, ArrowRight, ArrowLeft };
