import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing:border-box
	}

	html {
		font-family:'Lato', sans-serif;
		font-size: 8px;
	}

	@media (min-width:768px) {
		html{
			font-size: 10px;
		}
	}
`;

const COLORS = {
	AERO_ORANGE: "#FDAF1D" /* IS NOT EXACT THE SAME AS AEROLABS ONE */,
	YELLOW_COIN: "#FDD13D",
	MAIN_BLUE: "#0AD4FA",
	DARK_BLUE: "#12BBFF",
};

const MEDIA_SIZES = {
	MOBILE: "320px",
	TABLET: "768px",
	DESKTOP: "1024px",
	LARGE_DESKTOP: "1440px",
};

export { GlobalStyles, COLORS, MEDIA_SIZES };
