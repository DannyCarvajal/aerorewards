// Styles
import { SpinsLeftContainer, SpinsLeftText } from "./styled";

const SpinsLeftIndicator = () => {
	const leftSpins = 10;

	return (
		<SpinsLeftContainer>
			<SpinsLeftText>{leftSpins} spins left</SpinsLeftText>
		</SpinsLeftContainer>
	);
};

export default SpinsLeftIndicator;
