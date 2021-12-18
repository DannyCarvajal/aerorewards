import { useState } from "react";
// Styles
import { NavContainer, Hamburger } from "./styled";
import { AeroLogo } from "components/Global/images.styled";
// Componets
import SectionsNav from "../SectionsNav/SectionsNav";
// Router
import { Link } from "react-router-dom";

const NavbarContainer = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const hideMenu = () => setShowMobileMenu(!showMobileMenu);

	return (
		<NavContainer>
			<Link to="/">
				<AeroLogo />
			</Link>
			<SectionsNav active={showMobileMenu} hideMenu={hideMenu} />
			<Hamburger onClick={hideMenu} active={showMobileMenu} />
		</NavContainer>
	);
};

export default NavbarContainer;
