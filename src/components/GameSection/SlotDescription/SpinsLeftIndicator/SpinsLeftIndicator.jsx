import { SpinsLeftContainer, SpinsLeftText } from "./styled";

const SpinsLeftIndicator = () => {
	let leftSpins;

	if (localStorage.getItem("spinsLeft")) {
		const [prevDate, turnsLeft] = JSON.parse(localStorage.getItem("spinsLeft"));
		if (prevDate === new Date().toDateString()) {
			leftSpins = turnsLeft;
		} else {
			leftSpins = 10;
		}
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
