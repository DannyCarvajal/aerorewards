const useGameLogic = (setCurrImg, setStartGame) => {
	const random12Images = [];
	for (let i = 0; i < 12; i++) {
		random12Images.push(Math.floor(Math.random() * 3));
	}

	// RETURN HOW MANY TIMES TWO RANDOM NUMBERS FROM 0 TO 2 ARE THE SAME

	let imgCount = 0;
	const updateImage = (speed, times) => {
		return new Promise((resolve, reject) => {
			let count = 0;
			let changeImgInterval = setInterval(() => {
				setCurrImg(random12Images[imgCount]);

				if (count === times - 1) {
					clearInterval(changeImgInterval);
					resolve(random12Images[imgCount]);
				}

				imgCount++;
				count++;
			}, 300 * speed);
		});
	};

	const runSpinImages = async () => {
		let fastUpdate = await updateImage(1, 4);
		let mediumSpeedUpdate = await updateImage(1.3, 4);
		let SlowUpdate = await updateImage(2, 4);

		console.log("thirdUpdate: ", SlowUpdate);
		if (fastUpdate === mediumSpeedUpdate && mediumSpeedUpdate === SlowUpdate) {
			setStartGame("win");
		} else {
			setStartGame("loose");
		}
	};

	return { runSpinImages };
};

export default useGameLogic;
