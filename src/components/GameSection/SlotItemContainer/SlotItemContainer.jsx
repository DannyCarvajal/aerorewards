// Styles
import { SlotItemContainerStyled } from "./styled";
// Components
import SlotItem from "../SlotItem/SlotItem";

const SlotItemContainer = () => {
	return (
		<SlotItemContainerStyled>
			<SlotItem />
			<SlotItem />
			<SlotItem />
		</SlotItemContainerStyled>
	);
};

export default SlotItemContainer;
