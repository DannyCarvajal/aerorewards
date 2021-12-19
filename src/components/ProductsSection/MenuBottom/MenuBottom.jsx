import { BottomMenuContainer } from "./styled";

import ProductCount from "../Menu/ProductCount/ProductCount";

import { ArrowRight } from "components/Global/icons.styled";
import { ArrowLeft } from "components/Global/icons.styled";

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
