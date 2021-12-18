import styled from "styled-components";
// Styles
import { StyledCard, CanBuyIcon } from "../NormalCard/styled";
// Assets
import buyWhite from "assets/icons/buyWhite.svg";
// Animations
import { LeftToRight } from "components/Global/transitions.styled";

const ConfirmButton = styled.button`
	height: 40px;
	width: 100px;

	background: white;
	border-radius: 15px;
	border: none;

	cursor: pointer;

	i {
		margin: auto;

		color: ${({ theme }) => theme.MAIN_BLUE};
		font-size: ${({ theme }) => theme.MEDIUM};
	}
`;

const CanBuyWhite = styled(CanBuyIcon).attrs({
	src: buyWhite,
})`
	transform: scale(1.2);
`;

const CancelButton = styled(ConfirmButton)`
	background: ${({ theme }) => theme.RED_FORBIDDEN};

	i {
		color: white;
	}
`;

const ConfirmText = styled.p`
	max-width: 75%;

	font-size: ${({ theme }) => theme.LARGE};
`;

const StyledConfirmCard = styled(StyledCard)`
	justify-content: center;

	background: ${({ theme }) => theme.MAIN_BLUE};

	animation: ${LeftToRight} 1s ease-in-out;

	${ConfirmButton} {
		position: absolute;
		right: 15px;
		bottom: 15px;
	}

	${CancelButton} {
		position: absolute;
		left: 15px;
		bottom: 15px;
	}

	/* @media (max-width: 768px) {
		transform: scale(0.8);
	}

	@media (max-width: 425px) {
		transform: scale(0.69);
	} */
`;

export { StyledConfirmCard, ConfirmText, ConfirmButton, CancelButton, CanBuyWhite };
