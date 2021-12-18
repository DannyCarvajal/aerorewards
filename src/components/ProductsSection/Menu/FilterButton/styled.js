import styled from "styled-components";

const StyledFilterButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 130px;
	height: 40px;

	background-color: ${({ active, theme }) => (active ? theme.MAIN_BLUE : theme.LIGHT_GRAY)};
	border-radius: 15px;
	border: none;

	color: ${({ active, theme }) => (active ? "white" : theme.TEXT_LIGHT)};
	font-size: ${({ theme }) => theme.MEDIUM};
	text-decoration: none;

	cursor: pointer;
	outline: none;

	&:active {
		background-color: ${({ theme }) => theme.MAIN_BLUE};
	}

	&:hover {
		background-color: ${({ theme }) => theme.MAIN_BLUE};

		color: white;
	}

	@media (min-width: 480px) {
		height: 42px;
		width: 170px;
	}
`;

export { StyledFilterButton };
