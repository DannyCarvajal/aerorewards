import styled from "styled-components";

import { SpinsLeftContainer } from "./SpinsLeftIndicator/styled";

const StyledSlotDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 100%;

	padding: 50px 0;

	${SpinsLeftContainer} {
		position: absolute;
		right: 0;
		bottom: 10px;

		padding: 10px 40px;
	}

	@media (min-width: 768px) {
		width: 100%;

		padding-top: 0;

		${SpinsLeftContainer} {
			top: 0px;
			bottom: unset;

			padding: 15px 60px;
		}
	}

	@media (min-width: 1024px) {
		width: 25%;

		padding: 0;

		${SpinsLeftContainer} {
			top: -80px;
		}
	}

	@media (min-width: 1440px) {
		width: 30%;
	}
`;

export { StyledSlotDescription };
