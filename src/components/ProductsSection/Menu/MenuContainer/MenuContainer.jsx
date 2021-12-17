// Styles
import { StyledMenu, ArrowRight } from "./styled";
// Components
import ProductCount from "../ProductCount/ProductCount";
import FilterContainer from "../FilterContainer/FilterContainer";
// Context
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
