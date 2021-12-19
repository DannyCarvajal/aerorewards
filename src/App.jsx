import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, THEME } from "constants/globalStyles";
import { SectionWrapper } from "./app.styled";

import Home from "pages/Home";
import Products from "pages/products/Products";
import GameSection from "pages/game/Game";
import NavbarContainer from "components/Navbar/NavbarContainer/NavContainer";
import Footer from "components/Footer/Footer";

import PointsProvider from "points/pointsContext";

function App() {
	return (
		<PointsProvider>
			<ThemeProvider theme={THEME}>
				<BrowserRouter basename="/aerorewards">
					<GlobalStyles />
					<SectionWrapper>
						<NavbarContainer />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/game" element={<GameSection />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
						<Footer />
					</SectionWrapper>
				</BrowserRouter>
			</ThemeProvider>
		</PointsProvider>
	);
}

export default App;
