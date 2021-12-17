import { useState } from "react";
// Components
import NormalCard from "./NormalCard/NormalCard";
import ConfirmationCard from "./ConfirmationCard/ConfirmationCard";

const ProductCard = ({ product }) => {
	// FALSE, PROCESS, TRUE
	const [isRedeemed, setIsRedeemed] = useState(false);
	const setRedeemInProcess = () => setIsRedeemed("PROCESS");

	if (!isRedeemed) {
		return <NormalCard product={product} setRedeemInProcess={setRedeemInProcess} />;
	} else {
		return <ConfirmationCard product={product} setIsRedeemed={setIsRedeemed} />;
	}
};

export default ProductCard;
