const useGameLogic = (setCurrImg, setGameResult) => {
	const random12Images = [];
	let imgCount = 0;
	for (let i = 0; i < 12; i++) {
		random12Images.push(Math.floor(Math.random() * 3));
	}

	const updateImage = (speed, times) => {
		return new Promise(resolve => {
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
		await updateImage(1, 4);
		await updateImage(1.3, 4);
		let slowUpdate = await updateImage(2, 4);

		setGameResult(prev => [...prev, slowUpdate]);
	};

	return { runSpinImages };
};

export default useGameLogic;
