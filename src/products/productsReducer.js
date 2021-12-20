const PRODUCT_ACTIONS = {
	INIT: "INIT",
	RECENT: "RECENT",
	HIGHER_PRICE_TO_LOWER: "HIGHER_PRICE_TO_LOWER",
	LOWER_PRICE_TO_HIGHER: "LOWER_PRICE_TO_HIGHER",
	MY_PRODUCTS: "MY_PRODUCTS",
};

const productsReducer = (state, action) => {
	console.log("productsReducer", action);
	console.log(state);

	switch (action.type) {
		case PRODUCT_ACTIONS.INIT:
			return action.payload;

		case PRODUCT_ACTIONS.RECENT:
			return action.payload;

		case PRODUCT_ACTIONS.HIGHER_PRICE_TO_LOWER:
			return [...action.payload].sort((a, b) => b.cost - a.cost);

		case PRODUCT_ACTIONS.LOWER_PRICE_TO_HIGHER:
			return [...action.payload].sort((a, b) => a.cost - b.cost);

		case PRODUCT_ACTIONS.MY_PRODUCTS:
			return [...action.payload];

		default:
			return state;
	}
};

export default productsReducer;
export { PRODUCT_ACTIONS };
