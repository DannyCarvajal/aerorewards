import { StyledFilterButton } from "./styled";

const FilterButton = ({ title, action, active, updateActive }) => {
	const filterHandler = () => {
		action();
		updateActive();
	};

	return (
		<StyledFilterButton active={active} onClick={filterHandler}>
			{title}
		</StyledFilterButton>
	);
};

export default FilterButton;
