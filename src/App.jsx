import { ThemeProvider } from "styled-components";
import { COLORS } from "constants/globalStyles";

function App() {
	return (
		<ThemeProvider theme={COLORS}>
			<h1>Hey there</h1>
		</ThemeProvider>
	);
}

export default App;
