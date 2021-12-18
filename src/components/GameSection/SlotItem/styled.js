import styled from "styled-components";

const SlotItemStyled = styled.div`
	width: 100%;
	background: linear-gradient(195.46deg, #3e3e3e 1.97%, rgba(0, 0, 0, 0.46) 101.93%);
	box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	min-width: 100px;
	max-width: 150px;
	width: 30%;
	height: 150px;

	@media (min-width: 768px) {
		min-width: unset;
		max-width: unset;
		width: 240px;
		height: 380px;
	}
`;

export { SlotItemStyled };
