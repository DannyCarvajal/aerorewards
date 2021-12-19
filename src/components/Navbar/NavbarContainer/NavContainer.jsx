import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NavContainer, Hamburger } from "./styled";
import { AeroLogo } from "components/Global/images.styled";

import SectionsNav from "../SectionsNav/SectionsNav";

import useScreenSize from "hooks/useScreenSize";

const NavbarContainer = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const hideMenu = () => setShowMobileMenu(!showMobileMenu);
	const [isMobile] = useScreenSize();

	useEffect(() => {
		if (isMobile && showMobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			console.log("visible");
			document.body.style.overflow = "auto";
		}
	}, [isMobile, showMobileMenu]);

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
