import styled from "styled-components";
// Components
import { SpinsLeftContainer } from "./SpinsLeftIndicator/styled";

const StyledSlotDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 30%;

	${SpinsLeftContainer} {
		position: absolute;
		top: 50px;
		right: 0;
		padding: 15px 60px;
	}
`;

export { StyledSlotDescription };
