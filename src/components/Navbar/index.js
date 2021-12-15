// Styles
import { NavContainer } from "./styled";
import { AeroLogo } from "components/Global/images";
// Componets
import UserData from "components/UserData/index.js";
// Assets
import fullLogoSmall from "assets/images/fullLogoSmall.png";

const Navbar = () => {
	return (
		<NavContainer>
			<AeroLogo small src={fullLogoSmall} />
			<UserData />
		</NavContainer>
	);
};

export default Navbar;
