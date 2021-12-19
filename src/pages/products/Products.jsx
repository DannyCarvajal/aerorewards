import { ProductsSection } from "./styled";

import Header from "components/ProductsSection/Header/Header";
import MenuContainer from "components/ProductsSection/Menu/MenuContainer";
import ProductsContainer from "components/ProductsSection/ProductGrid/ProductsContainer";
import MenuBottom from "components/ProductsSection/MenuBottom/MenuBottom";

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
					<MenuBottom />
				</ProductsSection>
			</PaginationProvider>
		</ProductsProvider>
	);
};

export default Products;
