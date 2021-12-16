import { useState } from "react";
// Styles
import { NavContainer, Hamburger } from "./styled";
import { AeroLogo } from "components/Global/images.styled";
// Componets
import SectionsNav from "../SectionsNav/SectionsNav";
// Assets
import fullLogo from "assets/images/fullLogo.png";
// Router
import { Link } from "react-router-dom";

const NavbarContainer = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const menuHandler = () => setShowMobileMenu(!showMobileMenu);

	return (
		<NavContainer>
			<Link to="/">
				<AeroLogo src={fullLogo} />
			</Link>
			<SectionsNav active={showMobileMenu} />
			<Hamburger onClick={menuHandler} active={showMobileMenu} />
		</NavContainer>
	);
};

export default NavbarContainer;
