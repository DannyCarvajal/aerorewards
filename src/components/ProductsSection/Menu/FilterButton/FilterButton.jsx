// Styles
import { StyledFilterButton } from "./styled";

const FilterButton = ({ title, action }) => {
	return <StyledFilterButton onClick={() => action()}>{title}</StyledFilterButton>;
};

export default FilterButton;
