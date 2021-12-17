import { useLayoutEffect } from "react";
// Styles
import { StyledFilterContainer, FilterTitles } from "./styled";
// Components
import FilterButton from "../FilterButton/FilterButton";
// Consume Context
import { useProducts } from "products/productsContext";
// Constants
import { FILTER_BUTTONS } from "constants/buttons";
// Hooks - useActiveButtons
import { useActiveButtons } from "hooks/useActiveButtons";

const FilterContainer = () => {
	const [products, , dispatch] = useProducts();
	const [activeButtons, updateActiveButton] = useActiveButtons(FILTER_BUTTONS.length);
	useLayoutEffect(() => updateActiveButton(0), []);

	return (
		<StyledFilterContainer>
			<FilterTitles>Sort by:</FilterTitles>
			{FILTER_BUTTONS.map((button, index) => (
				<FilterButton
					key={index}
					title={button.title}
					action={() => {
						dispatch({
							type: button.type,
							payload: products,
						});
					}}
					active={activeButtons[index]}
					updateActive={() => updateActiveButton(index)}
				/>
			))}
		</StyledFilterContainer>
	);
};

export default FilterContainer;
