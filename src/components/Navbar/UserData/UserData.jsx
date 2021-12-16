import { useState, useEffect } from "react";
import { usePoints } from "points/pointsContext";
// Styles
import { UserDataContainer } from "./styled";
// Services
import { getUserData } from "services/getData";
// Components
import PointsContainer from "components/Global/PointsContainer/PointsContainer";

const UserData = () => {
	const [userName, setUserName] = useState("");
	const points = usePoints();

	useEffect(() => {
		getUserData()
			.then(data => {
				setUserName(data.name);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<UserDataContainer className="userDataContainer">
			<h2 className="userName">{userName}</h2>
			<PointsContainer points={points} />
		</UserDataContainer>
	);
};

export default UserData;
