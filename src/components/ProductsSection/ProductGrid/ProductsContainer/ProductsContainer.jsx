// Styles
import { GridProductContainer } from "./styled";
// Components
import ProductCard from "../ProductCard/ProductCard";
// Consume Context
import { useProducts } from "products/productsContext";
import { usePagination } from "products/paginationContext";

const ProductsContainer = () => {
	const [products, currProducts, dispatch] = useProducts();
	const [currPage] = usePagination();
	const productsPerPage = 12;
	const displayProducts = currProducts.slice(
		currPage * productsPerPage,
		(currPage + 1) * productsPerPage
	);

	return (
		<GridProductContainer>
			{displayProducts.map(product => (
				<ProductCard key={product._id} product={product} />
			))}
		</GridProductContainer>
	);
};

export default ProductsContainer;
