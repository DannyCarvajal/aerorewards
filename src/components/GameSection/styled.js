import styled from "styled-components";

const SlotContainerStyled = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 1400px;
	height: 500px;

	margin: 10px;

	background: linear-gradient(180deg, #ff9100 0%, #9a5a05 0.01%, #e19e21 100%);

	@media (min-width: 768px) {
		flex-direction: row;

		width: 95%;

		border-radius: 20px;
	}
`;

export { SlotContainerStyled };
