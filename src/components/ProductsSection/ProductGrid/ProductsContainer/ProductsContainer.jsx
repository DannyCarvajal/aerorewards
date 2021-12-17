// Styles
import { GridProductContainer } from "./styled";
// Components
import ProductCard from "../ProductCard/ProductCard";
// Consume Context
import { useProducts } from "products/productsContext";
import { usePagination } from "products/paginationContext";

const ProductsContainer = () => {
	const [, currProducts] = useProducts();
	const [, fromToProduct] = usePagination();
	const displayProducts = currProducts.slice(fromToProduct[0], fromToProduct[1]);

	return (
		<GridProductContainer>
			{displayProducts.map(product => (
				<ProductCard key={product._id} product={product} />
			))}
		</GridProductContainer>
	);
};

export default ProductsContainer;
