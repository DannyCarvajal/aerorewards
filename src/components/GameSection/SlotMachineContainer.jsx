// Styles
import { SlotContainerStyled } from "./styled.js";
// Components
import SlotItemContainer from "./SlotItemContainer/SlotItemContainer";
import SlotDescription from "./SlotDescription/SlotDescription";

const SlotMachineContainer = () => {
	return (
		<SlotContainerStyled>
			<SlotItemContainer />
			<SlotDescription />
		</SlotContainerStyled>
	);
};

export default SlotMachineContainer;
