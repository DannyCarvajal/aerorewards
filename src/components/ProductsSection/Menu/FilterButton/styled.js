import styled from "styled-components";

const StyledFilterButton = styled.button`
	text-decoration: none;
	border-radius: 15px;
	height: 42px;
	width: 170px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	font-size: ${({ theme }) => theme.MEDIUM};
	color: ${({ theme }) => theme.TEXT_LIGHT};
	cursor: pointer;
	outline: none;

	background-color: ${({ theme }) => theme.LIGHT_GRAY};

	&:active {
		background-color: ${({ theme }) => theme.MAIN_BLUE};
	}

	&:hover {
		background-color: ${({ theme }) => theme.MAIN_BLUE};
		color: white;
	}
`;

export { StyledFilterButton };
