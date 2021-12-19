import { useEffect } from "react";

import useGameLogic from "./gameLogic";

import { usePoints } from "points/pointsContext";

import { addPoints, reedemProduct } from "services/postData";

const useGameStateChange = ({
	startGame,
	setStartGame,
	gameResult,
	setGameResult,
	setCurrImg,
	imgNum,
}) => {
	const { runSpinImages } = useGameLogic(setCurrImg, setGameResult);
	const [, reloadPoints] = usePoints();

	useEffect(() => {
		if (startGame === true) {
			// CHECK SPINS LEFT
			if (localStorage.getItem("spinsLeft")) {
				const spinsLeft = JSON.parse(localStorage.getItem("spinsLeft"));
				const prevDate = spinsLeft[0];
				if (prevDate === new Date().toDateString() && spinsLeft[1] === 0) {
					if (imgNum === 0) alert("You have no spins left");
					return false;
				}
			}

			// BUY PRODUCT TO EMULATE PAYMENT, JUST DO IT ONCE WITH THE FIRS ITEM
			if (imgNum === 0) {
				let fakePayId = "5a0b3640734d1d08bf708500";
				reedemProduct(fakePayId).catch(err => {
					alert("Couldnt do the payment");
					console.error(err);
				});
			}

			runSpinImages();
			reloadPoints();
			setStartGame("spinning");
		}
	}, [startGame, runSpinImages, setStartGame, reloadPoints, imgNum]);

	useEffect(() => {
		if (gameResult.length === 3) {
			if (gameResult.every(item => item === gameResult[0])) {
				setStartGame("win");
				// ADD POINTS WON
				addPoints(1000)
					.then(_ => {
						reloadPoints();
					})
					.catch(err => {
						alert("Couldnt add points, we are sorry");
						console.log(err);
					});
			} else {
				setStartGame("loose");
			}
			// UPDATE LOCAL STORAGE, JUST DO IT ONCE WITH THE FIRST ITEM
			if (imgNum === 0) {
				if (localStorage.getItem("spinsLeft")) {
					const spinsLeft = JSON.parse(localStorage.getItem("spinsLeft"));
					spinsLeft[1] = spinsLeft[1] - 1;
					localStorage.setItem("spinsLeft", JSON.stringify(spinsLeft));
				} else {
					const spinsLeft = [new Date().toDateString(), 9];
					localStorage.setItem("spinsLeft", JSON.stringify(spinsLeft));
				}
			}

			setGameResult([]);
		}
	}, [gameResult, setStartGame, setGameResult, reloadPoints, imgNum]);
};

export default useGameStateChange;
