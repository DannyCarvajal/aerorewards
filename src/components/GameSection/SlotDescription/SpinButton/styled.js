import styled from "styled-components";

const SpinIcon = styled.i.attrs({
	className: "fas fa-retweet",
})`
	color: rgba(255, 235, 235, 0.82);
`;

const ButtonLevel3 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 180px;
	height: 180px;

	background: rgba(250, 185, 38, 0.12);
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 230px;
		height: 230px;
	}
`;

const ButtonLevel2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 130px;
	height: 130px;

	margin: auto;

	background: rgba(250, 185, 38, 0.32);
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 170px;
		height: 170px;
	}
`;

const SpinButtonText = styled.h2`
	color: rgba(255, 255, 255, 0.8);
	font-size: ${({ theme }) => theme.SMALL};
`;

const StyledSpinButton = styled.button`
	width: 90px;
	height: 90px;

	margin: auto;

	background: #fab926;
	border: none;
	border-radius: 50%;

	cursor: pointer;

	&:hover {
		background: rgba(250, 185, 38, 0.87);
	}

	i {
		font-size: 5rem;
	}

	@media (min-width: 768px) {
		width: 120px;
		height: 120px;
	}
`;

export { SpinIcon, ButtonLevel3, ButtonLevel2, SpinButtonText, StyledSpinButton };
