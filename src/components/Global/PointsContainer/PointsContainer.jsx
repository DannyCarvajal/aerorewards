// Styles
import { PointsStyled } from "./styled";
// Assets
import coin from "assets/icons/coin.svg";

// TYPE COULD BE EITHER "PRICE" FOR PRODUCTS, OR DEFAULT FOR POINTS
const PointsContainer = ({ points, type }) => {
	let prefix = type === "price" ? "$" : "";

	return (
		<PointsStyled type={type}>
			<h2 className="points">
				{prefix}
				{points}
			</h2>
			<img src={coin} alt="coin" width={25} height={25} />
		</PointsStyled>
	);
};

export default PointsContainer;
