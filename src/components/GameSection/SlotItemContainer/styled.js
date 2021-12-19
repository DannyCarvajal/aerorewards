import styled from "styled-components";

const SlotItemContainerStyled = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	width: 100%;

	padding: 50px 0;

	@media (min-width: 768px) {
		justify-content: center;
		gap: 30px;

		width: 75%;
	}

	@media (min-width: 1440px) {
		width: 70%;

		gap: 50px;
	}
`;

export { SlotItemContainerStyled };
