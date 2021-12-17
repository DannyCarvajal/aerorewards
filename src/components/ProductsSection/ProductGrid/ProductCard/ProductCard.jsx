import { useState } from "react";
// Components
import NormalCard from "./NormalCard/NormalCard";
import ConfirmationCard from "./ConfirmationCard/ConfirmationCard";
import SuccessCard from "./SuccessCard/SuccessCard";

const ProductCard = ({ product }) => {
	// FALSE, PROCESS, TRUE
	const [isRedeemed, setIsRedeemed] = useState(false);
	const setRedeemInProcess = () => setIsRedeemed("PROCESS");

	if (!isRedeemed) {
		return <NormalCard product={product} setRedeemInProcess={setRedeemInProcess} />;
	} else if (isRedeemed === "PROCESS") {
		return <ConfirmationCard product={product} setIsRedeemed={setIsRedeemed} />;
	} else {
		return <SuccessCard success={isRedeemed} />;
	}
};

export default ProductCard;
