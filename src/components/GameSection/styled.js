import styled from "styled-components";

const SlotContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	max-width: 1400px;

	margin: auto;

	background: linear-gradient(180deg, #ff9100 0%, #9a5a05 0.01%, #e19e21 100%);

	@media (min-width: 768px) {
		height: unset;
	}

	@media (min-width: 1024px) {
		flex-direction: row;

		width: 95%;

		border-radius: 20px;
	}
`;

export { SlotContainerStyled };
