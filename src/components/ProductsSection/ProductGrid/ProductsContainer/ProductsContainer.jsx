// Styles
import { GridProductContainer } from "./styled";
// Components
import ProductCard from "../ProductCard/ProductCard";
// Consume Context
import { useProducts } from "products/productsContext";
import { usePagination } from "products/paginationContext";

const ProductsContainer = () => {
	const [, currProducts] = useProducts();
	const [currPage] = usePagination();
	const productsPerPage = 12;

	console.log(currProducts);
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
