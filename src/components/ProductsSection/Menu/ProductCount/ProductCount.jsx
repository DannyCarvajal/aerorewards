// Styles
import { CountContainer, CountTitle } from "./styled";
// Consuming context
import { usePagination } from "products/paginationContext";

const ProductCount = ({ totalAmount = 32 }) => {
	const [currPage] = usePagination();
	let amountOfProducts = (currPage + 1) * 12 > totalAmount ? totalAmount : (currPage + 1) * 12;

	return (
		<CountContainer>
			<CountTitle>
				{amountOfProducts} of {totalAmount} products
			</CountTitle>
		</CountContainer>
	);
};

export default ProductCount;
