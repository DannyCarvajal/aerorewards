import styled from "styled-components";

const UserDataContainer = styled.div`
	width: calc(100px + 18px + 115px); /* name, margin, points */
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	.userName {
		font-size: 2rem;
		font-weight: 400;
	}
`;

const PointsContainer = styled.div`
	min-width: 115px;
	width: fit-content;
	padding: 0.5rem;
	height: 48px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
	background: rgba(10, 1, 1, 0.36);
	border-radius: 15px;

	.points {
		color: #fff;
	}
`;

export { UserDataContainer, PointsContainer };
