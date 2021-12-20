import { useState, useEffect } from "react";

import { getReedemHistory } from "services/getData";

import { usePoints } from "points/pointsContext";
const useMyProductsHistory = () => {
	const [myProductsHistory, setMyProductsHistory] = useState([]);
	const [points] = usePoints();

	const filterProducts = products => {
		const today = new Date();
		const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
		const todayProducts = products.filter(product => {
			const productDate = new Date(product.createDate).toISOString().split("T")[0];
			return productDate === todayDate || productDate > todayDate;
		});
		const uniqueProducts = todayProducts.filter((prod, index, self) => {
			return index === self.findIndex(t => t.name === prod.name);
		});
		return uniqueProducts;
	};
	const updateProductHistory = () => {
		getReedemHistory()
			.then(data => {
				let uniqueProducts = filterProducts(data);
				setMyProductsHistory(uniqueProducts);
				return uniqueProducts;
			})
			.catch(error => {
				console.error(error);
			});
	};
	// SETTING DATA FOR FIRST LOAD
	useEffect(() => updateProductHistory(), []);

	useEffect(() => {
		updateProductHistory();
	}, [points]);

	return [myProductsHistory];
};

export default useMyProductsHistory;
