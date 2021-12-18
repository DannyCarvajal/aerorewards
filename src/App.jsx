// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles, THEME } from "constants/globalStyles";
// Pages
import Home from "pages/Home";
import Products from "pages/products/Products";
import BetMachine from "pages/BetMachine";
// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Components
import NavbarContainer from "components/Navbar/NavbarContainer/NavContainer";
import Footer from "components/Footer/Footer";
// Context
import PointsProvider from "points/pointsContext";

function App() {
	return (
		<PointsProvider>
			<ThemeProvider theme={THEME}>
				<BrowserRouter>
					<GlobalStyles />
					<NavbarContainer />
					<Routes>
						<Route path="/aerorewards" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/game" element={<BetMachine />} />
						<Route path="*" element={<Navigate to="/aerorewards" />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</PointsProvider>
	);
}

export default App;
