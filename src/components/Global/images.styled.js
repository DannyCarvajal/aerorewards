import styled from "styled-components";

import fullLogo from "assets/images/FullLogo.png";

const AeroLogo = styled.img.attrs({
	src: fullLogo,
	alt: "fullLogo",
})`
	width: 200px;
	height: auto;

	@media (min-width: 768px) {
		width: 250px;
		height: 81.48px;
	}
`;

export { AeroLogo };
