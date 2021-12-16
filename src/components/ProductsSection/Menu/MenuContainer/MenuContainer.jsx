// Styles
import { StyledMenu, ArrowRight } from "./styled";
// Components
import ProductCount from "../ProductCount/ProductCount";
import FilterContainer from "../FilterContainer/FilterContainer";
// Context
import { usePagination } from "products/paginationContext";

const MenuContainer = () => {
	const [, updatePage] = usePagination();

	return (
		<StyledMenu>
			<ProductCount totalAmount={32} />
			<FilterContainer />
			<ArrowRight onClick={updatePage} />
		</StyledMenu>
	);
};

export default MenuContainer;
