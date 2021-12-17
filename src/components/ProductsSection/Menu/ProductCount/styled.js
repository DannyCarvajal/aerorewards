import styled from "styled-components";

const CountContainer = styled.div.attrs({
	className: "countContainer",
})`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: fit-content;
	min-width: 160px;
	padding-right: 10px;
	border-right: 1px solid #d9d9d9;
`;

const CountTitle = styled.h2`
	font-size: ${props => props.theme.MEDIUM};
	color: ${props => props.theme.TEXT_DARK};
	font-weight: 400;
`;

export { CountContainer, CountTitle };
