import { useState, createContext, useContext } from "react";

const PaginationContext = createContext();
export const usePagination = () => useContext(PaginationContext);

const PaginationProvider = ({ children }) => {
	const [currPage, setCurrPage] = useState(0);
	const updatePage = () => {
		if (currPage === 2) {
			setCurrPage(0);
		} else {
			setCurrPage(currPage + 1);
		}
	};

	return (
		<PaginationContext.Provider value={[currPage, updatePage]}>
			{children}
		</PaginationContext.Provider>
	);
};

export default PaginationProvider;
