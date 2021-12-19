import { useEffect, useState } from "react";
// Styles
import { SpinIcon, ButtonLevel3, ButtonLevel2, SpinButtonText, StyledSpinButton } from "./styled";

let SPINNING_COLORS = {
	init: "250, 185, 38",
	spinning: "38, 72, 250",
	win: "11, 242, 145",
	loose: "217, 6, 128",
};

const SpinButton = ({ startGame, setStartGame }) => {
	const [spinButtonText, setSpinButtonText] = useState("SPIN");
	const [spinningColor, setSpinningColor] = useState(SPINNING_COLORS.init);
	const spinButtonHandler = () => {
		if (!startGame || startGame === "win" || startGame === "loose") setStartGame(true);
	};

	useEffect(() => {
		if (startGame === "spinning") {
			setSpinButtonText("spinning..");
			setSpinningColor(SPINNING_COLORS.spinning);
		}
		if (startGame === "win") {
			setSpinningColor(SPINNING_COLORS.win);
			setSpinButtonText("Win");
		}
		if (startGame === "loose") {
			setSpinningColor(SPINNING_COLORS.loose);
			setSpinButtonText("Loose");
		}
	}, [startGame, setStartGame]);

	return (
		<ButtonLevel3 spinningColor={spinningColor}>
			<ButtonLevel2 spinningColor={spinningColor}>
				<StyledSpinButton onClick={spinButtonHandler} spinningColor={spinningColor}>
					<SpinIcon />
					<SpinButtonText>{spinButtonText}</SpinButtonText>
				</StyledSpinButton>
			</ButtonLevel2>
		</ButtonLevel3>
	);
};

export default SpinButton;
