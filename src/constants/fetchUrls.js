const BASE_URL = "https://coding-challenge-api.aerolab.co";
const userDataUrl = BASE_URL + "/user/me";
const reedemHistoryUrl = BASE_URL + "/user/history";
const getProductsUrl = BASE_URL + "/products";
const addPointsUrl = BASE_URL + "/user/points";
const reedemProductUrl = BASE_URL + "/redeem";
const TOKEN = process.env.REACT_APP_TOKEN;

const headers = {
	"Content-Type": "application/json",
	Authorization: TOKEN,
	Accept: "application/json",
};

export default BASE_URL;
export { userDataUrl, addPointsUrl, reedemHistoryUrl, reedemProductUrl, getProductsUrl, headers };
