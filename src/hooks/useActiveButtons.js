import { useState } from "react";

const useActiveButtons = buttonAmount => {
	const initState = Array(buttonAmount).fill(false);
	const [activeButton, setActiveButton] = useState(initState);

	const udpateButton = index => {
		const newActiveButton = initState;
		newActiveButton[index] = !newActiveButton[index];
		setActiveButton(newActiveButton);
	};

	return [activeButton, udpateButton];
};

export { useActiveButtons };
