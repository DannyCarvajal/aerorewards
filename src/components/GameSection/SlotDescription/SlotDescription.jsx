import { StyledSlotDescription } from "./styled";

import SpinsLeftIndicator from "./SpinsLeftIndicator/SpinsLeftIndicator";
import SpinButton from "./SpinButton/SpinButton";

const SlotDescription = ({ startGame, setStartGame }) => {
	return (
		<StyledSlotDescription>
			<SpinsLeftIndicator />
			<SpinButton setStartGame={setStartGame} startGame={startGame} />
		</StyledSlotDescription>
	);
};

export default SlotDescription;
