import styled from "styled-components";

const StyledFilterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px;

	position: relative;
	height: 40px;

	@media (min-width: 1024px) {
		justify-content: flex-start;
		gap: 25px;
	}
`;

const FilterTitles = styled.h2`
	color: ${({ theme }) => theme.TEXT_LIGHT};
	font-size: ${({ theme }) => theme.MEDIUM};
	font-weight: normal;
`;

export { StyledFilterContainer, FilterTitles };
