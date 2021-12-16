// Styles
import { PointsStyled } from "./styled";
// Assets
import coin from "assets/icons/coin.png";

// TYPE COULD BE EITHER "PRICE" FOR PRODUCTS, OR DEFAULT FOR POINTS
const PointsContainer = ({ points, type }) => {
	return (
		<PointsStyled type={type}>
			<h2 className="points">{points}</h2>
			<img src={coin} alt="coin" width={25} height={25} />
		</PointsStyled>
	);
};

export default PointsContainer;
