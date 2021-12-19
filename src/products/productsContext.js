import { useEffect, useReducer, useContext, createContext, useRef } from "react";

import { getProducts } from "services/getData";

import productsReducer from "./productsReducer";

const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const ProductsProvider = ({ children }) => {
	const products = useRef([]);
	const [currProd, dispatch] = useReducer(productsReducer, []);

	useEffect(() => {
		getProducts()
			.then(data => {
				products.current = data;
				console.log(products.current);
				dispatch({ type: "INIT", payload: data });
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<productsContext.Provider value={[products.current, currProd, dispatch]}>
			{children}
		</productsContext.Provider>
	);
};

export default ProductsProvider;
