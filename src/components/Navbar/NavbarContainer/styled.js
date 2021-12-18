import styled from "styled-components";

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 80px;

	background: #f9f9f9;
`;

const Hamburger = styled.i.attrs(({ active }) => ({
	className: active ? "fas fa-times" : "fas fa-bars",
}))`
	z-index: 1;

	margin-right: 20px;

	font-size: 3.5rem;
	color: ${({ active }) => (active ? "white" : "black")};

	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export { NavContainer, Hamburger };
