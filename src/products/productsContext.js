import { useEffect, useReducer, useContext, createContext, useState } from "react";
// Services
import { getProducts } from "services/getData";
// Reducer
import productsReducer from "./productsReducer";

const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [currProd, dispatch] = useReducer(productsReducer, []);

	useEffect(() => {
		getProducts()
			.then(data => {
				setProducts(data);
				dispatch({ type: "INIT", payload: data });
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<productsContext.Provider value={[products, currProd, dispatch]}>
			{children}
		</productsContext.Provider>
	);
};

export default ProductsProvider;
