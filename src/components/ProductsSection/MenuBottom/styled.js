import styled from "styled-components";

import { ArrowRight } from "components/Global/icons.styled";

const BottomMenuContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;

	position: relative;
	width: 90%;
	max-width: 90%;
	height: fit-content;

	padding: 25px 0px;

	border: none;
	border-bottom: 1px solid #d9d9d9;

	${ArrowRight} {
		position: absolute;
		right: 0;
	}
`;

export { BottomMenuContainer };
