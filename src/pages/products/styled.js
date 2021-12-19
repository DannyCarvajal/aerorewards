import styled from "styled-components";

import { BottomMenuContainer } from "components/ProductsSection/MenuBottom/styled";

const ProductsSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;

	overflow-x: hidden;

	header {
		margin-top: 36px;
	}

	${BottomMenuContainer} {
		margin-bottom: 30px;
	}
`;

export { ProductsSection };
