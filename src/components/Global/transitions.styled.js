import { keyframes } from "styled-components";

const SuccessAnimation = keyframes`
  0% {
	opacity: 0.5;
	transform: translateY(10px);
	}
	  100% {
	opacity: 1;
	transform: translateY(0px);
	}
`;

const LeftToRight = keyframes`
  0% {
	opacity: 0.5;
	transform: translateX(-10px);
	}
	  100% {
	opacity: 1;
	transform: translateX(0px);
	}
`;

export { SuccessAnimation, LeftToRight };
