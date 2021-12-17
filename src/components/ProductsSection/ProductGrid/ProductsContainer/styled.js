import styled from "styled-components";

const GridProductContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, minmax(235px, 1fr));
	grid-auto-rows: 340px;
	place-items: center;
	margin-top: 60px;
	margin-bottom: 20px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		grid-auto-rows: unset;
		width: 90%;
		grid-row-gap: 30px;
		grid-column-gap: 35px;
	}
`;

export { GridProductContainer };
