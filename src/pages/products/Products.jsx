// Styles
import { ProductsSection } from "./styled";
// Components
import Header from "components/ProductsSection/Header/Header";
import MenuContainer from "components/ProductsSection/Menu/MenuContainer/MenuContainer";
import ProductsContainer from "components/ProductsSection/ProductGrid/ProductsContainer/ProductsContainer";
// Context
import ProductsProvider from "products/productsContext";
import PaginationProvider from "products/paginationContext";

const Products = () => {
	return (
		<ProductsProvider>
			<PaginationProvider>
				<ProductsSection>
					<Header />
					<MenuContainer />
					<ProductsContainer />
				</ProductsSection>
			</PaginationProvider>
		</ProductsProvider>
	);
};

export default Products;
