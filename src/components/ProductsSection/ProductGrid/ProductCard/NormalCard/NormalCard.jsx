import {
	StyledCard,
	CanBuyIcon,
	ProductImg,
	ProductInfoWrapper,
	ProductName,
	ProductCategory,
	RedeemButton,
} from "./styled";

import PointsContainer from "components/Global/PointsContainer/PointsContainer";

import usePriceLogic from ".//productPriceLogic";

const NormalCard = ({ product, setRedeemInProcess }) => {
	const { category, cost, img, name } = product;
	const { canBuy, btnText, largeText, buyHandler } = usePriceLogic({
		cost,
		name,
		setRedeemInProcess,
	});

	return (
		<StyledCard className="card">
			<CanBuyIcon canBuy={canBuy} />
			<ProductImg img={img.url} />
			<PointsContainer points={cost} type="price" />
			<ProductInfoWrapper>
				<ProductName>{name}</ProductName>
				<ProductCategory largeText={largeText}>{category}</ProductCategory>
			</ProductInfoWrapper>
			<RedeemButton canBuy={canBuy} onClick={buyHandler}>
				{btnText}
			</RedeemButton>
		</StyledCard>
	);
};

export default NormalCard;
