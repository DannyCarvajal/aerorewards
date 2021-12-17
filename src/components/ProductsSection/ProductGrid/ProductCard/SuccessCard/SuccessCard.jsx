// Styles
import { StyledSuccessCard, SuccessText } from "./styled";
import { CheckIcon, CancelIcon } from "components/Global/icons.styled";

const SuccessCard = ({ success }) => {
	let text = success === true ? "Product redeemed!" : "Failed redeeming!";
	let Icon = () => (success === true ? <CheckIcon /> : <CancelIcon />);

	return (
		<StyledSuccessCard success={success}>
			<Icon />
			<SuccessText>{text}</SuccessText>
		</StyledSuccessCard>
	);
};

export default SuccessCard;
