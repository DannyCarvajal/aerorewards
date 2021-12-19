import styled from "styled-components";

import { TrophyContainerStyled } from "components/Home/TrophyContainer/styled";

const HomeSection = styled.section`
	display: flex;
	flex-direction: column;

	width: 100%;

	${TrophyContainerStyled} {
		order: 1;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;

		${TrophyContainerStyled} {
			order: 0;
		}
	}
`;

export { HomeSection };
