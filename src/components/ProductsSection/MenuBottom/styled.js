import styled from "styled-components";
// Assets
import { ArrowRight } from "components/Global/icons.styled";

const BottomMenuContainer = styled.div`
	position: relative;
	width: 90%;
	max-width: 90%;
	display: flex;
	justify-content: flex-start;
	gap: 20px;
	flex-wrap: wrap;
	height: fit-content;
	padding: 25px 0px;
	align-items: center;
	border: none;
	border-bottom: 1px solid #d9d9d9;

	${ArrowRight} {
		position: absolute;
		right: 0;
	}
`;

export { BottomMenuContainer };
