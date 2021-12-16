import { userDataUrl, reedemHistoryUrl, getProductsUrl, headers } from "../constants/fetchUrls";

// CURRYING TO GET DATA
function fetchData(url) {
	return async () => {
		const request = await fetch(url, {
			method: "GET",
			headers,
		});
		return await request.json();
	};
}

const getUserData = fetchData(userDataUrl);
const getReedemHistory = fetchData(reedemHistoryUrl);
const getProducts = fetchData(getProductsUrl);

export { getUserData, getReedemHistory, getProducts };
