// Styles
import {
	StyledCard,
	CanBuyIcon,
	ProductImg,
	ProductInfoWrapper,
	ProductName,
	ProductCategory,
	RedeemButton,
} from "./styled";

// Consuming context
import { usePoints } from "points/pointsContext";
// Components
import PointsContainer from "components/Global/PointsContainer/PointsContainer";

const NormalCard = ({ product, setRedeemInProcess }) => {
	const { category, cost, img, name } = product;
	const [points] = usePoints();
	let canBuy = cost <= points;
	let pointsToBuy = cost - points;
	let btnText = canBuy ? "Redeem now" : `you need ${pointsToBuy} more points`;
	let largeText = name.length > 20;

	return (
		<StyledCard className="card">
			<CanBuyIcon canBuy={canBuy} />
			<ProductImg img={img.url} />
			<PointsContainer points={cost} type="price" />
			<ProductInfoWrapper>
				<ProductName>{name}</ProductName>
				<ProductCategory largeText={largeText}>{category}</ProductCategory>
			</ProductInfoWrapper>
			<RedeemButton canBuy={canBuy} onClick={setRedeemInProcess}>
				{btnText}
			</RedeemButton>
		</StyledCard>
	);
};

export default NormalCard;
