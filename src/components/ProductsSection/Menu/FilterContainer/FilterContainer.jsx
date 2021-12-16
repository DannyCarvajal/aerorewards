// Styles
import { StyledFilterContainer, FilterTitles } from "./styled";
// Components
import FilterButton from "../FilterButton/FilterButton";

const FilterContainer = () => {
	return (
		<StyledFilterContainer>
			<FilterTitles>Sort by:</FilterTitles>
			<FilterButton title="Most recent" action={() => {}} />
			<FilterButton title="Lowest price" action={() => {}} />
			<FilterButton title="Highest price" action={() => {}} />
			<FilterButton title="My products" action={() => {}} />
		</StyledFilterContainer>
	);
};

export default FilterContainer;
