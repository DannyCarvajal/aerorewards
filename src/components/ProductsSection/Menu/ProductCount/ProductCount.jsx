import { CountContainer, CountTitle } from "./styled";

const ProductCount = ({ totalAmount = 32 }) => {
	let curr = Math.floor(totalAmount / 3);

	return (
		<CountContainer>
			<CountTitle>
				{curr} of {totalAmount} products
			</CountTitle>
		</CountContainer>
	);
};

export default ProductCount;
