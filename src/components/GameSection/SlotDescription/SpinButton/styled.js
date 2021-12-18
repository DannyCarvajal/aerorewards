import styled from "styled-components";

const SpinIcon = styled.i.attrs({
	className: "fas fa-retweet",
})`
	color: rgba(255, 235, 235, 0.82);
`;

const ButtonLevel3 = styled.div`
	background: rgba(250, 185, 38, 0.12);
	width: 230px;
	height: 230px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonLevel2 = styled.div`
	background: rgba(250, 185, 38, 0.32);
	width: 170px;
	height: 170px;
	border-radius: 50%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SpinButtonText = styled.h2`
	color: rgba(255, 255, 255, 0.8);
	font-size: ${({ theme }) => theme.SMALL};
`;

const StyledSpinButton = styled.button`
	background: #fab926;
	border: none;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	margin: auto;
	cursor: pointer;

	&:hover {
		background: rgba(250, 185, 38, 0.87);
	}

	i {
		font-size: 5rem;
	}
`;

export { SpinIcon, ButtonLevel3, ButtonLevel2, SpinButtonText, StyledSpinButton };
