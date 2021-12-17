import { useEffect, useReducer, useContext, createContext, useRef } from "react";
// Services
import { getProducts } from "services/getData";
// Reducer
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
				dispatch({ type: "INIT", payload: data });
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	// useEffect(() => {
	// 	console.log("and new state is ", currProd);
	// }, [currProd]);

	return (
		<productsContext.Provider value={[products.current, currProd, dispatch]}>
			{children}
		</productsContext.Provider>
	);
};

export default ProductsProvider;
