import styled from "styled-components";

const AeroLogo = styled.img.attrs({
	alt: "fullLogo",
})`
	width: 200px;
	justify-self: "flex-start";

	@media (min-width: 768px) {
		width: 250px;
	}
`;

export { AeroLogo };
