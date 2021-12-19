import { useState } from "react";

import { SlotItemContainerStyled } from "./styled";

import SlotItem from "../SlotItem/SlotItem";

const SlotItemContainer = ({ startGame, setStartGame }) => {
	const slotImages = [0, 1, 2];
	const [gameResult, setGameResult] = useState([]);

	return (
		<SlotItemContainerStyled>
			{slotImages.map(index => (
				<SlotItem
					key={index}
					imgNum={index}
					startGame={startGame}
					setStartGame={setStartGame}
					gameResult={gameResult}
					setGameResult={setGameResult}
				/>
			))}
		</SlotItemContainerStyled>
	);
};

export default SlotItemContainer;
