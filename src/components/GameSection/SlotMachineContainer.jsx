import { useState } from "react";

import { SlotContainerStyled } from "./styled.js";

import SlotItemContainer from "./SlotItemContainer/SlotItemContainer";
import SlotDescription from "./SlotDescription/SlotDescription";

const SlotMachineContainer = () => {
	const [startGame, setStartGame] = useState(false);

	return (
		<SlotContainerStyled>
			<SlotItemContainer startGame={startGame} setStartGame={setStartGame} />
			<SlotDescription setStartGame={setStartGame} startGame={startGame} />
		</SlotContainerStyled>
	);
};

export default SlotMachineContainer;
