// Styles
import { CountContainer, CountTitle } from "./styled";
// Consuming context
import { usePagination } from "products/paginationContext";

const ProductCount = () => {
	const [, fromToProduct, productAmount] = usePagination();
	let currAmountProducts = fromToProduct[1] > productAmount ? productAmount : fromToProduct[1];

	return (
		<CountContainer>
			<CountTitle>
				{currAmountProducts} of {productAmount} products
			</CountTitle>
		</CountContainer>
	);
};

export default ProductCount;
