import { PRODUCT_ACTIONS } from "products/productsReducer";

const FILTER_BUTTONS = [
	{
		title: "Most recent",
		type: PRODUCT_ACTIONS.RECENT,
	},
	{
		title: "Lowest price",
		type: PRODUCT_ACTIONS.LOWER_PRICE_TO_HIGHER,
	},
	{
		title: "Highest price",
		type: PRODUCT_ACTIONS.HIGHER_PRICE_TO_LOWER,
	},
];

export { FILTER_BUTTONS };
