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

const THEME = {
	// COLORS
	MAGIC_PURPLE: "#5118F5",
	YELLOW_COIN: "#FDD13D",
	MAIN_BLUE: "#0AD4FA",
	DARK_BLUE: "#12BBFF",
	// TEXT
	TEXT_DARK: "#616161",
	TEXT_LIGHT: "#A3A3A3",

	// FONTS
	SUBTITLE: "1.9rem",
};

const MEDIA_SIZES = {
	MOBILE: "320px",
	TABLET: "768px",
	DESKTOP: "1024px",
	LARGE_DESKTOP: "1440px",
};

export { GlobalStyles, THEME, MEDIA_SIZES };
