// Styles
import { StyledConfirmCard, ConfirmText, ConfirmButton, CancelButton, CanBuyWhite } from "./styled";
import { CheckIcon, CancelIcon } from "components/Global/icons.styled";
// Logic
import useProductLogic from "./productLogic";

const ConfirmationCard = ({ product, setIsRedeemed }) => {
	const { cost, name, _id } = product;
	const { cancelRedeem, completeRedeem } = useProductLogic({ setIsRedeemed, _id });

	return (
		<StyledConfirmCard className="card">
			<CanBuyWhite />
			<ConfirmText>
				Confirm you want to redeem the <b>{name}</b> for <b>{cost} points</b> ?
			</ConfirmText>
			<ConfirmButton onClick={completeRedeem}>
				<CheckIcon />
			</ConfirmButton>
			<CancelButton onClick={cancelRedeem}>
				<CancelIcon />
			</CancelButton>
		</StyledConfirmCard>
	);
};

export default ConfirmationCard;
