import { useState, useEffect } from "react";
import { usePoints } from "context/pointsContext";
// Styles
import { UserDataContainer, PointsContainer } from "./styled";
// Services
import { getUserData } from "services/getData";
// Assets
import coin from "assets/icons/coin.png";

const UserData = () => {
	const [userName, setUserName] = useState("");
	const points = usePoints();

	useEffect(() => {
		getUserData().then(data => {
			setUserName(data.name);
		});
	}, []);

	return (
		<UserDataContainer>
			<h2 className="userName">{userName}</h2>
			<PointsContainer>
				<h2 className="points">{points}</h2>
				<img src={coin} alt="coin" width={25} height={25} />
			</PointsContainer>
		</UserDataContainer>
	);
};

export default UserData;
