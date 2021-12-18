import styled, { css } from "styled-components";

const PointsStyled = styled.div.attrs({
	className: "pointsContainer",
})`
	width: fit-content;
	height: 48px;
	display: flex;
	${props => {
		switch (props.type) {
			case "price":
				return css`
					padding: 0.5rem 0;
					justify-content: space-between;
					gap: 1rem;
					align-items: center;
					font-size: 1.4rem;
					background: transparent;

					.points {
						font-style: italic;
						font-weight: 400;
						color: black;
					}
				`;

			default:
				return css`
					min-width: 115px;
					padding: 0.5rem;
					justify-content: space-evenly;
					align-items: center;
					font-size: 1.4rem;
					font-weight: bold;
					background: white;
					border-radius: 15px;

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
