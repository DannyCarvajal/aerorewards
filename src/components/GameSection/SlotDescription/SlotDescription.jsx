// Styles
import { StyledSlotDescription } from "./styled";
// Components
import SpinsLeftIndicator from "./SpinsLeftIndicator/SpinsLeftIndicator";
import SpinButton from "./SpinButton/SpinButton";

const SlotDescription = () => {
	return (
		<StyledSlotDescription>
			<SpinsLeftIndicator />
			<SpinButton />
		</StyledSlotDescription>
	);
};

export default SlotDescription;
