import styled from "styled-components";

const NavContainer = styled.div`
	width: 100%;
	height: 80px;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f9f9f9;
`;

const Hamburger = styled.i.attrs(({ active }) => ({
	className: active ? "fas fa-times" : "fas fa-bars",
}))`
	display: block;
	font-size: 3.5rem;
	margin-right: 20px;
	cursor: pointer;
	z-index: 1;
	color: ${({ active }) => (active ? "white" : "black")};

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export { NavContainer, Hamburger };
