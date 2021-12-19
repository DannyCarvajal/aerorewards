import { useState, useEffect } from "react";
// Styles
import { SlotItemStyled } from "./styled.js";
// Assets
import AerolabLogo from "assets/icons/AerolabLogo.svg";
import rewardsLogo from "assets/icons/AerorewardsLogo.svg";
import DannyCarvajal from "assets/icons/DannyCarvajal.svg";
// Logic
import useGameLogic from "./gameLogic.js";

const SlotItem = ({ imgNum, startGame, setStartGame }) => {
	const [currImg, setCurrImg] = useState(imgNum);
	const { runSpinImages } = useGameLogic(setCurrImg, setStartGame);
	let srcImg = currImg === 0 ? DannyCarvajal : currImg === 1 ? AerolabLogo : rewardsLogo;

	useEffect(() => {
		if (startGame === true) {
			runSpinImages();
			setStartGame("spinning");
		}
	}, [startGame, runSpinImages, setStartGame]);

	return (
		<SlotItemStyled>
			<img src={srcImg} alt="slot-item" width={srcImg === DannyCarvajal ? 130 : 110} />
		</SlotItemStyled>
	);
};

export default SlotItem;
