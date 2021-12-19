import { useState } from "react";

import { SlotItemStyled, SpinningImg } from "./styled.js";

import AerolabLogo from "assets/icons/AerolabLogo.svg";
import rewardsLogo from "assets/icons/AerorewardsLogo.svg";
import DannyCarvajal from "assets/icons/DannyCarvajal.svg";

import useGameStateChange from "./gameStateChange";

const SlotItem = ({ imgNum, startGame, setStartGame, gameResult, setGameResult }) => {
	const [currImg, setCurrImg] = useState(imgNum);
	useGameStateChange({
		startGame,
		setStartGame,
		gameResult,
		setGameResult,
		setCurrImg,
		imgNum,
	});

	let srcImg = currImg === 0 ? DannyCarvajal : currImg === 1 ? AerolabLogo : rewardsLogo;

	return (
		<SlotItemStyled>
			<SpinningImg src={srcImg} alt="slot-item" currImg={currImg} />
		</SlotItemStyled>
	);
};

export default SlotItem;
