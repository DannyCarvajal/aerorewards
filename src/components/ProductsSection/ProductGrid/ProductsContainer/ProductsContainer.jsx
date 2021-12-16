// Styles
import { GridProductContainer } from "./styled";
// Components
import ProductCard from "../ProductCard/ProductCard";
// Consume Context
import { useProducts } from "products/productsContext";

const ProductsContainer = () => {
	const [products, currProducts, dispatch] = useProducts();
	console.log(products, currProducts, dispatch);

	return (
		<GridProductContainer>
			{products.map(product => (
				<ProductCard key={product._id} product={product} />
			))}
		</GridProductContainer>
	);
};

export default ProductsContainer;
