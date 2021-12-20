import styled from "styled-components";

import { ArrowRight } from "components/Global/icons.styled";

const StyledMenu = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	width: 90%;
	max-width: 90%;
	height: fit-content;

	padding: 25px 0px;

	border: none;

	${ArrowRight} {
		display: none;
	}

	${ArrowRight} {
		margin-left: auto;
	}

	.countContainer {
		display: none;
	}

	@media (min-width: 768px) {
		border-bottom: 1px solid #d9d9d9;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;

		width: 85%;
		height: 100px;

		.countContainer {
			display: flex;
		}
	}

	@media (min-width: 1080px) {
		${ArrowRight} {
			display: block;
		}
	}
`;

export { StyledMenu, ArrowRight };
