import styled from "styled-components";

const CountContainer = styled.div.attrs({
	className: "countContainer",
})`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: fit-content;
	min-width: 160px;
	height: 40px;

	padding-right: 10px;

	border-right: 1px solid #d9d9d9;
`;

const CountTitle = styled.h2`
	color: ${props => props.theme.TEXT_DARK};
	font-size: ${props => props.theme.MEDIUM};
	font-weight: 400;
`;

export { CountContainer, CountTitle };
