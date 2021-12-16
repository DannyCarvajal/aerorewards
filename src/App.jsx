// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles, THEME } from "constants/globalStyles";
// Pages
import Home from "pages/Home";
import Products from "pages/Products";
import BetMachine from "pages/BetMachine";
// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Components
import NavbarContainer from "components/Navbar/NavbarContainer/NavContainer";
// Context
import PointsProvider from "context/pointsContext";

function App() {
	return (
		<PointsProvider>
			<ThemeProvider theme={THEME}>
				<BrowserRouter>
					<GlobalStyles />
					<NavbarContainer />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/game" element={<BetMachine />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</PointsProvider>
	);
}

export default App;
