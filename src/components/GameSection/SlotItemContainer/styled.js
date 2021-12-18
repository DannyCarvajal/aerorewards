import styled from "styled-components";

const SlotItemContainerStyled = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	padding: 50px 0;

	@media (min-width: 768px) {
		justify-content: center;
		gap: 50px;
		width: 70%;
	}
`;

export { SlotItemContainerStyled };
