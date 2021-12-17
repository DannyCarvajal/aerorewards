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
		font-size: 9px;
	}

	@media (min-width:768px) {
		html{
			font-size: 10px;
		}
	}
	@media (min-width: 1440px) {
		html{
			font-size: 10.5px;
		}
	}
`;

const THEME = {
	// COLORS
	BLACK: " rgba(0, 0, 0, 0.75);",
	MAIN_BLUE: "#0AD4FA",
	DARK_BLUE: "#12BBFF",
	RED_FORBIDDEN: "#D90680",
	LIGHT_GRAY: "#EDEDED",
	SUCESS: "#0BF291",
	// TEXT
	TEXT_DARK: "#616161",
	TEXT_LIGHT: "#A3A3A3",
	// FONTS
	MAIN_TITLE: "5rem",
	LARGE: "2.3rem",
	MEDIUM: "1.9rem",
	SMALL: "1.6rem",
};

const MEDIA_SIZES = {
	MOBILE: "320px",
	TABLET: "768px",
	DESKTOP: "1024px",
	LARGE_DESKTOP: "1440px",
};

export { GlobalStyles, THEME, MEDIA_SIZES };
