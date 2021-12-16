import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const SectionsContainerNav = styled.div`
	position: absolute;
	min-height: 400px;
	inset: 0;
	background: gray;
	display: ${props => (props.active ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.85);
	gap: 3rem;
	z-index: 1;

	.userDataContainer {
		margin-top: 20px;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		position: unset;
		background: unset;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 3rem;
		width: 78%;

		.userDataContainer {
			margin-top: unset;
			margin-left: auto;
		}
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 3rem;

	@media screen and (min-width: 768px) {
		color: #000;
		font-size: ${props => props.theme.MEDIUM};
		font-weight: 500;
	}
`;

export { SectionsContainerNav, StyledLink };
