import { GameSectionStyled, GameTextExplain, DecorationLine } from "./styled.js";

import SlotMachineContainer from "components/GameSection/SlotMachineContainer";

const GameSection = () => {
	return (
		<GameSectionStyled>
			<GameTextExplain>
				To win you gotta risk sometimes. In this case you can take a chance to spend 100 coins to
				win a thousand. You can try it max 10 times a day,<b> Good luck!</b>
			</GameTextExplain>
			<DecorationLine />
			<SlotMachineContainer />
		</GameSectionStyled>
	);
};

export default GameSection;
