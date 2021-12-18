import styled from "styled-components";
// Assets
import fullLogo from "assets/images/fullLogo.png";

const AeroLogo = styled.img.attrs({
	src: fullLogo,
	alt: "fullLogo",
})`
	width: 200px;

	@media (min-width: 768px) {
		width: 250px;
	}
`;

export { AeroLogo };
