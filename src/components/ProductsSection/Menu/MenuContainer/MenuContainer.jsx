// Styles
import { StyledMenu, ArrowRight } from "./styled";
// Components
import ProductCount from "../ProductCount/ProductCount";
import FilterContainer from "../FilterContainer/FilterContainer";

const MenuContainer = () => {
	return (
		<StyledMenu>
			<ProductCount totalAmount={32} />
			<FilterContainer />
			<ArrowRight />
		</StyledMenu>
	);
};

export default MenuContainer;
