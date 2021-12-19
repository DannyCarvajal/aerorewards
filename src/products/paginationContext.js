import { useState, createContext, useContext, useEffect } from "react";

import { useProducts } from "./productsContext";

const PaginationContext = createContext();
export const usePagination = () => useContext(PaginationContext);

const PaginationProvider = ({ children }) => {
	const [, currProd] = useProducts();
	// PAGES
	const productsPerPage = 12;
	let amountPagesFormula = Math.ceil(currProd.length / productsPerPage) - 1;
	const [currPage, setCurrPage] = useState(0);
	const [amountPages, setAmountPages] = useState(amountPagesFormula);
	const [fromToProduct, setFromToProduct] = useState([0, productsPerPage]);

	// UDPATE CURRPAGE
	useEffect(() => {
		if (currProd.length > 0) {
			setCurrPage(0);
			setFromToProduct([0, productsPerPage]);
			setAmountPages(amountPagesFormula);
		}
	}, [currProd, amountPagesFormula]);

	// SET PRODUCTS PER PAGES
	useEffect(() => {
		let newFromToProducts = [currPage * productsPerPage, (currPage + 1) * productsPerPage];
		setFromToProduct(newFromToProducts);
	}, [currPage]);

	// UDPATE BUTTONS
	const updatePageForwards = () => setCurrPage(currPage === amountPages ? 0 : currPage + 1);
	const updatePageBackwards = () => setCurrPage(currPage === 0 ? amountPages : currPage - 1);

	return (
		<PaginationContext.Provider
			value={[currPage, fromToProduct, currProd.length, updatePageForwards, updatePageBackwards]}
		>
			{children}
		</PaginationContext.Provider>
	);
};

export default PaginationProvider;
