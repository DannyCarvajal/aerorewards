import styled from "styled-components";
// Components
import { SpinsLeftContainer } from "./SpinsLeftIndicator/styled";

const StyledSlotDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 100%;

	${SpinsLeftContainer} {
		position: absolute;
		bottom: -50px;
		right: 0;

		padding: 10px 40px;
	}

	@media (min-width: 768px) {
		width: 30%;

		${SpinsLeftContainer} {
			padding: 15px 60px;

			position: absolute;
			top: 50px;
			right: 0;
			bottom: unset;
		}
	}
`;

export { StyledSlotDescription };
