import { usePoints } from "points/pointsContext";

const usePriceLogic = ({ product, setRedeemInProcess }) => {
	const { cost, name } = product;

	// CHECK IF CAN BUY
	const [points] = usePoints();
	let canBuy = cost <= points;
	let pointsToBuy = cost - points;
	let btnText = canBuy ? "Redeem now" : `you need ${pointsToBuy} more points`;
	let largeText = name.length > 20;

	// CHECK IF IS PART OF MY PRODUCTS
	let redeemProd;

	if (product.hasOwnProperty("productId")) {
		redeemProd = true;
		btnText = "Your product";
	} else {
		redeemProd = false;
	}

	const buyHandler = () => {
		if (canBuy && !redeemProd) setRedeemInProcess(true);
	};

	return { canBuy, btnText, largeText, buyHandler, redeemProd };
};

export default usePriceLogic;
