import styled from "styled-components";

const StyledFilterContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	height: 40px;
	flex-wrap: wrap;

	@media (min-width: 768px) {
		gap: 25px;
		justify-content: center;
	}
`;

const FilterTitles = styled.h2`
	font-size: ${({ theme }) => theme.MEDIUM};
	color: ${({ theme }) => theme.TEXT_LIGHT};
	font-weight: normal;
`;

export { StyledFilterContainer, FilterTitles };
