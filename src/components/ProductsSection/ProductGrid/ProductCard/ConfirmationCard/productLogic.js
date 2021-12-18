// Services
import { reedemProduct } from "services/postData";
// Update context
import { usePoints } from "points/pointsContext";

const useProductLogic = ({ setIsRedeemed, _id }) => {
	const [, reloadPoints] = usePoints();

	const cancelRedeem = () => setIsRedeemed(false);

	const completeRedeem = () => {
		reedemProduct(_id)
			.then(_ => {
				reloadPoints();
				setIsRedeemed(true);
				setTimeout(() => setIsRedeemed(false), 4000);
			})
			.catch(err => {
				setIsRedeemed("ERROR");
				setTimeout(() => setIsRedeemed(false), 4000);
				console.log(err);
			});
	};

	return { cancelRedeem, completeRedeem };
};

export default useProductLogic;
