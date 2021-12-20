import { usePoints } from "points/pointsContext";

const usePriceLogic = ({ cost, name, setRedeemInProcess }) => {
	const [points] = usePoints();
	let canBuy = cost <= points;
	let pointsToBuy = cost - points;
	let btnText = canBuy ? "Redeem now" : `you need ${pointsToBuy} more points`;
	let largeText = name.length > 20;

	const buyHandler = () => {
		if (canBuy) setRedeemInProcess(true);
	};

	return { canBuy, btnText, largeText, buyHandler };
};

export default usePriceLogic;
