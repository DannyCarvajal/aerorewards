import { StyledMenu, ArrowRight } from "./styled";

import ProductCount from "./ProductCount/ProductCount";
import FilterContainer from "./FilterContainer/FilterContainer";

import { usePagination } from "products/paginationContext";

const MenuContainer = () => {
	const [, , , updatePageForwards] = usePagination();

	return (
		<StyledMenu>
			<ProductCount />
			<FilterContainer />
			<ArrowRight onClick={updatePageForwards} />
		</StyledMenu>
	);
};

export default MenuContainer;
