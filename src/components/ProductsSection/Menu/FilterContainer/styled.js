import styled from "styled-components";

const StyledFilterContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	gap: 10px;
	height: 40px;
	flex-wrap: wrap;

	@media (min-width: 1024px) {
		gap: 25px;
		justify-content: center;
		justify-content: flex-start;
	}
`;

const FilterTitles = styled.h2`
	font-size: ${({ theme }) => theme.MEDIUM};
	color: ${({ theme }) => theme.TEXT_LIGHT};
	font-weight: normal;
`;

export { StyledFilterContainer, FilterTitles };
