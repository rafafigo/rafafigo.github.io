import * as React from 'react';
import {PaletteMode} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MenuBar from './components/MenuBar';
import Cover from './components/Cover';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import getWebsiteTheme from './getWebsiteTheme';
import {AnimatedFadeInDivider} from "./components/common/Animation";
import Experience from "./components/Experience";

export default function App() {
    const [mode, setMode] = React.useState<PaletteMode>('dark');
    const customTheme = createTheme(getWebsiteTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <MenuBar mode={mode} toggleColorMode={toggleColorMode}/>
            <Cover/>
            <Box sx={{bgcolor: 'background.default'}}>
                <AnimatedFadeInDivider/>
                <AboutMe/>
                <AnimatedFadeInDivider/>
                <Experience/>
                <AnimatedFadeInDivider/>
                <Skills/>
                <AnimatedFadeInDivider/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

