import { useState, useEffect, useContext, createContext } from "react";

import { getUserData } from "services/getData";

const PointsContext = createContext();
const usePoints = () => useContext(PointsContext);

function PointsProvider({ children }) {
	const [points, setPoints] = useState(null);

	const initPoints = async () => {
		try {
			const { points } = await getUserData();
			setPoints(points);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => initPoints(), [points]);

	return <PointsContext.Provider value={[points, initPoints]}>{children}</PointsContext.Provider>;
}

export default PointsProvider;
export { usePoints };
