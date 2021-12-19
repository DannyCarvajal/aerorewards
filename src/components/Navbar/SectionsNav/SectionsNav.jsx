import { SectionsContainerNav, StyledLink } from "./styled";

import UserData from "../UserData/UserData";

const SectionsNav = ({ active, hideMenu }) => {
	return (
		<SectionsContainerNav active={active}>
			<StyledLink to="/products" onClick={hideMenu}>
				Products
			</StyledLink>
			<StyledLink to="/game" onClick={hideMenu}>
				Gain Coins
			</StyledLink>
			<UserData />
		</SectionsContainerNav>
	);
};

export default SectionsNav;
