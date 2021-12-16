import styled from "styled-components";

const GridProductContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 30px;
	place-items: center;
	margin-top: 60px;
	min-height: 1000px;

	@media (min-width: 768px) {
		width: 90%;
		grid-column-gap: 35px;
	}
`;

export { GridProductContainer };
