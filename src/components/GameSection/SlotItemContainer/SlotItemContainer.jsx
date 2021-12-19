// Styles
import { SlotItemContainerStyled } from "./styled";
// Components
import SlotItem from "../SlotItem/SlotItem";

const SlotItemContainer = ({ startGame, setStartGame }) => {
	const slotImages = [0, 1, 2];

	return (
		<SlotItemContainerStyled>
			{slotImages.map(index => (
				<SlotItem key={index} imgNum={index} startGame={startGame} setStartGame={setStartGame} />
			))}
		</SlotItemContainerStyled>
	);
};

export default SlotItemContainer;
