import styled from "styled-components";
// Styles
import { StyledCard, CanBuyIcon } from "../NormalCard/styled";
// Assets
import buyWhite from "assets/icons/buyWhite.svg";
// Animations
import { LeftToRight } from "components/Global/transitions.styled";

const ConfirmButton = styled.button`
	background: white;
	border-radius: 15px;
	height: 40px;
	width: 100px;
	border: none;
	cursor: pointer;

	i {
		margin: auto;
		font-size: ${({ theme }) => theme.MEDIUM};
		color: ${({ theme }) => theme.MAIN_BLUE};
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
	font-size: ${({ theme }) => theme.LARGE};
	max-width: 75%;
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
`;

export { StyledConfirmCard, ConfirmText, ConfirmButton, CancelButton, CanBuyWhite };
