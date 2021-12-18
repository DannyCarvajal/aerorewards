import styled from "styled-components";

const DecorationLine = styled.div`
	width: 90%;
	height: 1px;

	position: relative;
	bottom: 30px;

	background: #d9d9d9;
`;

const GameTextExplain = styled.p`
	width: 90%;

	font-size: ${({ theme }) => theme.LARGE};
	font-weight: 300;

	@media (min-width: 768px) {
		width: 80%;

		letter-spacing: 0.5px;
	}
`;

const GameSectionStyled = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	overflow-x: hidden;

	${GameTextExplain} {
		margin: 50px;
	}

	${DecorationLine} {
		align-self: flex-start;
	}
`;

export { GameSectionStyled, GameTextExplain, DecorationLine };
