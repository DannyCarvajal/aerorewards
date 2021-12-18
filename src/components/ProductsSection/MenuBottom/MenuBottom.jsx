// Styles
import { BottomMenuContainer } from "./styled";
// Components
import ProductCount from "../Menu/ProductCount/ProductCount";
// Assets
import { ArrowRight } from "components/Global/icons.styled";
import { ArrowLeft } from "components/Global/icons.styled";
// Context Pagination
import { usePagination } from "products/paginationContext";

const MenuBottom = () => {
	const [, , , updatePageForwards, updatePageBackwards] = usePagination();

	return (
		<BottomMenuContainer>
			<ArrowLeft onClick={updatePageBackwards} />
			<ProductCount />
			<ArrowRight onClick={updatePageForwards} />
		</BottomMenuContainer>
	);
};

export default MenuBottom;
