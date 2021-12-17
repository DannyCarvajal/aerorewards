// Styles
import { StyledFilterContainer, FilterTitles } from "./styled";
// Components
import FilterButton from "../FilterButton/FilterButton";
// Consume Context
import { useProducts } from "products/productsContext";
import { PRODUCT_ACTIONS } from "products/productsReducer";

const FilterContainer = () => {
	const [products, , dispatch] = useProducts();

	return (
		<StyledFilterContainer>
			<FilterTitles>Sort by:</FilterTitles>
			<FilterButton
				title="Most recent"
				action={() =>
					dispatch({
						type: PRODUCT_ACTIONS.RECENT,
						payload: products,
					})
				}
			/>
			<FilterButton
				title="Lowest price"
				action={() =>
					dispatch({
						type: PRODUCT_ACTIONS.LOWER_PRICE_TO_HIGHER,
						payload: products,
					})
				}
			/>
			<FilterButton
				title="Highest price"
				action={() =>
					dispatch({
						type: PRODUCT_ACTIONS.HIGHER_PRICE_TO_LOWER,
						payload: products,
					})
				}
			/>
			<FilterButton
				title="My products"
				action={() =>
					dispatch({
						type: PRODUCT_ACTIONS.MY_PRODUCTS,
						payload: products,
					})
				}
			/>
		</StyledFilterContainer>
	);
};

export default FilterContainer;
