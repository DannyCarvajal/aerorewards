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
// Services
import { getReedemHistory } from "services/getData";

// Schema
/*{ 
	category: string
	cost: number
	img: {
		url: string,
		hdUrl: string
	}
	name: string
	_id: string 
}*/

const ProductCard = ({ product }) => {
	const { category, cost, img, name } = product;
	const points = usePoints();
	let canBuy = cost <= points;
	let pointsToBuy = cost - points;
	let btnText = canBuy ? "Redeem now" : `you need ${pointsToBuy} more points`;
	let largeText = name.length > 20;

	const buyProduct = () => {
		alert("You bought " + name + " for " + cost + " points");
	};

	return (
		<StyledCard>
			<CanBuyIcon canBuy={canBuy} />
			<ProductImg img={img.url} />
			<PointsContainer points={cost} type="price" />
			<ProductInfoWrapper>
				<ProductName>{name}</ProductName>
				<ProductCategory largeText={largeText}>{category}</ProductCategory>
			</ProductInfoWrapper>
			<RedeemButton canBuy={canBuy} onClick={buyProduct}>
				{btnText}
			</RedeemButton>
		</StyledCard>
	);
};

export default ProductCard;
