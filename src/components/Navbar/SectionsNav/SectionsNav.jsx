// Styles
import { SectionsContainerNav, StyledLink } from "./styled";
// Components
import UserData from "../UserData/UserData";

const SectionsNav = ({ active }) => {
	return (
		<SectionsContainerNav active={active}>
			<StyledLink to="/products">Products</StyledLink>
			<StyledLink to="/game">Gain Coins</StyledLink>
			<UserData />
		</SectionsContainerNav>
	);
};

export default SectionsNav;
