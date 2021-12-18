import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const SectionsContainerNav = styled.div`
	display: ${props => (props.active ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	position: absolute;
	inset: 0;
	min-height: 400px;
	z-index: 1;

	background: rgba(0, 0, 0, 0.85);

	.userDataContainer {
		margin-top: 20px;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 3rem;

		position: unset;
		width: 78%;

		background: unset;

		.userDataContainer {
			margin-top: unset;
			margin-left: auto;
		}
	}
`;

const StyledLink = styled(Link)`
	color: white;
	font-size: 3rem;
	text-decoration: none;

	@media screen and (min-width: 768px) {
		color: #000;
		font-size: ${props => props.theme.MEDIUM};
		font-weight: 500;
	}
`;

export { SectionsContainerNav, StyledLink };
