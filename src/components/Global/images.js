import styled from "styled-components";

const AeroLogo = styled.img.attrs({
	alt: "fullLogo",
})`
	width: ${props => (props.small ? "200px" : "300px")};
	justify-self: "flex-start";
	padding-left: 10px;
`;

export { AeroLogo };
