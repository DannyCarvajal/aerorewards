import { useState, useEffect } from "react";

import { UserDataContainer } from "./styled";

import PointsContainer from "components/Global/PointsContainer/PointsContainer";

import { getUserData } from "services/getData";

import { usePoints } from "points/pointsContext";

const UserData = () => {
	const [userName, setUserName] = useState("");
	const [points] = usePoints();

	useEffect(() => {
		getUserData()
			.then(data => {
				setUserName(data.name);
			})
			.catch(err => {
				console.error(err);
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
