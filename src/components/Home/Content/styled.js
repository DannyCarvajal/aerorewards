import styled from "styled-components";
import { Link } from "react-router-dom";

import Confetti from "assets/icons/confetti.svg";

const MainTitleHome = styled.h1`
	font-size: ${({ theme }) => theme.ULTRA_LARGE};
	font-weight: bold;
	font-style: italic;
`;

const CallToAction = styled(Link)`
	background-color: ${({ theme }) => theme.BLACK};
	border: none;
	border-radius: 15px;

	padding: 10px 70px;

	color: white;
	font-size: ${({ theme }) => theme.LARGE};
	font-weight: bold;
	text-align: center;
	text-decoration: none;

	cursor: pointer;
`;

const HomeContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
	width: 100%;
	height: 500px;

	overflow: hidden;

	${MainTitleHome} {
		align-self: flex-start;

		margin: 100px 0 0 9%;
	}

	@media (min-width: 768px) {
		width: 60%;
		height: 600px;

		${MainTitleHome} {
			align-self: flex-end;

			margin: 120px 50px 0 0;
		}
	}
`;

const ConfettiBg = styled.img.attrs({
	src: Confetti,
	alt: "Confetti",
})`
	position: absolute;
	top: -10px;
	right: -20px;
`;

const HomeContent = styled.p`
	max-width: 80%;

	margin: 40px 0 20px 0;

	font-size: ${({ theme }) => theme.LARGER};
	font-weight: 300;
	text-align: justify;
	text-justify: inter-word;

	b {
		font-weight: 700;
	}

	i {
		color: rgba(252, 178, 100, 1);
	}

	@media (min-width: 400px) {
		margin: 40px 0 50px 0;
	}
`;

export { HomeContentContainer, ConfettiBg, MainTitleHome, HomeContent, CallToAction };
