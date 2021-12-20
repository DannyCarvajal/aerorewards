import { GridProductContainer } from "./styled";

import ProductCard from "./ProductCard/ProductCard";

import { useProducts } from "products/productsContext";
import { usePagination } from "products/paginationContext";

const ProductsContainer = () => {
	const [, currProducts] = useProducts();
	const [, fromToProduct] = usePagination();
	const displayProducts = currProducts.slice(fromToProduct[0], fromToProduct[1]);
	const productAmount = displayProducts.length;

	return (
		<GridProductContainer productAmount={productAmount}>
			{displayProducts.map(product => (
				<ProductCard key={product.createDate + product._id} product={product} />
			))}
		</GridProductContainer>
	);
};

export default ProductsContainer;
