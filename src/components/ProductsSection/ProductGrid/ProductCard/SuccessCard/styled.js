import styled from "styled-components";
// Styles
import { StyledCard } from "../NormalCard/styled";
// Animations
import { SuccessAnimation } from "components/Global/transitions.styled";

const SuccessText = styled.p`
	position: relative;
	top: 40px;

	color: white;
	font-size: ${({ theme }) => theme.LARGE};
	font-weight: bold;
`;

const StyledSuccessCard = styled(StyledCard)`
	justify-content: center;

	background: ${({ success, theme }) => (success === "ERROR" ? theme.RED_FORBIDDEN : theme.SUCESS)};

	animation: ${SuccessAnimation} 2s;

	i {
		font-size: 5rem;
		color: white;
	}
`;

export { StyledSuccessCard, SuccessText };
