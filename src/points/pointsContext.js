import { useState, useEffect, useContext, createContext } from "react";
// Services
import { getUserData } from "services/getData";

const PointsContext = createContext();
const usePoints = () => useContext(PointsContext);

function PointsProvider({ children }) {
	const [points, setPoints] = useState(0);

	useEffect(() => {
		getUserData().then(data => {
			setPoints(data.points);
		});
	}, [points]);

	return <PointsContext.Provider value={points}>{children}</PointsContext.Provider>;
}

export default PointsProvider;
export { usePoints };
