import styled from "styled-components";

const SlotItemContainerStyled = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	width: 100%;

	padding: 50px 0;

	background: linear-gradient(195.46deg, #3e3e3e 1.97%, rgba(0, 0, 0, 0.46) 101.93%);

	@media (min-width: 768px) {
		justify-content: center;
		gap: 30px;

		width: 75%;

		background: transparent;
	}

	@media (min-width: 1440px) {
		width: 70%;

		gap: 50px;
	}
`;

export { SlotItemContainerStyled };
