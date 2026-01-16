import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuBar from "./components/MenuBar";
import Cover from "./components/Cover";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import getWebsiteTheme from "./getWebsiteTheme";
import Experience from "./components/Experience";

export default function App() {
	// Always use dark mode
	const websiteTheme = createTheme(getWebsiteTheme("dark"));

	return (
		<ThemeProvider theme={websiteTheme}>
			<CssBaseline />
			<MenuBar />
			<Cover />
			<Box 
				sx={{ 
					bgcolor: "background.default",
					py: { xs: 2, sm: 3, md: 4 },
					background: `linear-gradient(180deg, ${alpha("#18181B", 0.0)} 0%, #18181B 15%, #18181B 100%)`,
				}}
			>
				<AboutMe />
				<Experience />
				<Skills />
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
