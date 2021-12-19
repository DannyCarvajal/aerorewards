// Styles
import { SpinsLeftContainer, SpinsLeftText } from "./styled";

const SpinsLeftIndicator = () => {
	let leftSpins;

	if (localStorage.getItem("spinsLeft")) {
		const [, turnsLeft] = JSON.parse(localStorage.getItem("spinsLeft"));
		leftSpins = turnsLeft;
	} else {
		leftSpins = 10;
	}

	return (
		<SpinsLeftContainer>
			<SpinsLeftText>{leftSpins} spins left</SpinsLeftText>
		</SpinsLeftContainer>
	);
};

export default SpinsLeftIndicator;
