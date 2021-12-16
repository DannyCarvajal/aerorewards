import styled, { css } from "styled-components";

const PointsStyled = styled.div`
	${props => {
		switch (props.type) {
			case "price":
				return css``;

			default:
				return css`
					min-width: 115px;
					width: fit-content;
					padding: 0.5rem;
					height: 48px;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					font-size: 1.4rem;
					font-weight: bold;
					background: ${({ theme }) => theme.MAGIC_PURPLE};
					border-radius: 15px;

					.points {
						color: #fff;
					}
				`;
		}
	}}
`;

export { PointsStyled };
