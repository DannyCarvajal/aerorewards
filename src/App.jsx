// Styles
import { ThemeProvider } from "styled-components";
import { COLORS } from "constants/globalStyles";
// Pages
import Home from "pages/home/Home";
import Products from "pages/redeemProducts/Products";
import BetMachine from "pages/slotMachine/BetMachine";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<ThemeProvider theme={COLORS}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/game" element={<BetMachine />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
