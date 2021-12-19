import styled from "styled-components";

const SlotItemStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 30%;
	height: 150px;
	min-width: 100px;
	max-width: 150px;

	border-radius: 15px;

	@media (min-width: 768px) {
		width: 200px;
		height: 360px;
		min-width: unset;
		max-width: unset;

		background: linear-gradient(195.46deg, #3e3e3e 1.97%, rgba(0, 0, 0, 0.46) 101.93%);
		box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
	}

	@media (min-width: 1120px) {
		width: 240px;
		height: 380px;
	}
`;

const SpinningImg = styled.img`
	width: ${({ currImg }) => (currImg === 0 ? "100px" : "80px")};
	@media (min-width: 768px) {
		width: ${({ currImg }) => (currImg === 0 ? "130px" : "110px")};
	}
`;

export { SlotItemStyled, SpinningImg };
