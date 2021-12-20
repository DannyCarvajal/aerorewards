import { useLayoutEffect } from "react";

import { StyledFilterContainer, FilterTitles } from "./styled";

import FilterButton from "../FilterButton/FilterButton";

import { useActiveButtons } from "hooks/useActiveButtons";
import useMyProductsHistory from "hooks/useMyProductsHistory";

import { useProducts } from "products/productsContext";

import { FILTER_BUTTONS } from "constants/buttons";

const FilterContainer = () => {
	const [products, , dispatch] = useProducts();
	const [activeButtons, updateActiveButton] = useActiveButtons(FILTER_BUTTONS.length);

	const [myProductsHistory] = useMyProductsHistory();

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
							payload: button.title === "My products" ? myProductsHistory : products,
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
