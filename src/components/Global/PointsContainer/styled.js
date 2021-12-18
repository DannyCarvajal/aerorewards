import styled, { css } from "styled-components";

const PointsStyled = styled.div.attrs({
	className: "pointsContainer",
})`
	display: flex;

	width: fit-content;
	height: 48px;
	${props => {
		switch (props.type) {
			case "price":
				return css`
					justify-content: space-between;
					align-items: center;
					gap: 1rem;

					padding: 0.5rem 0;

					background: transparent;

					font-size: 1.4rem;

					.points {
						color: black;
						font-style: italic;
						font-weight: 400;
					}
				`;

			default:
				return css`
					justify-content: space-evenly;
					align-items: center;

					min-width: 115px;

					padding: 0.5rem;

					background: white;
					border-radius: 15px;

					font-size: 1.4rem;
					font-weight: bold;

					.points {
						color: black;
					}

					@media (min-width: 768px) {
						background: ${({ theme }) => theme.BLACK};
						.points {
							color: #fff;
						}
					}
				`;
		}
	}}
`;

export { PointsStyled };
