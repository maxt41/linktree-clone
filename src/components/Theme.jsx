import React, { useEffect, useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, IconButton } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from '../context/ThemeContext';

const theme = createTheme({
    palette: {
        light: {
            main: '#fff',
        },
        dark: {
            main: '#444444',
        },
    },
});

const Theme = () => {
    const { setDarkMode, darkMode, light, dark } = useContext(ThemeContext)

    const setColour = (backgroundColour, textColour) => {
        document.documentElement.style.setProperty('--background-colour', backgroundColour); // Set css variables to new colours
        document.documentElement.style.setProperty('--text-colour', textColour);
    }

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        let backgroundColour;
        let textColour;
        if (darkMode) {
            toast('Dark Mode Enabled.', { icon: '🌙', style: { backgroundC: light.backgroundColour, color: light.textColour } })
            backgroundColour = dark.backgroundColour
            textColour = dark.textColour
        } else {
            toast('Dark Mode Disabled.', { icon: '☀️', style: { background: dark.backgroundColour, color: dark.textColour } })
            backgroundColour = light.backgroundColour
            textColour = light.textColour
        }
        setColour(backgroundColour, textColour)
    }, [setDarkMode, darkMode, light, dark])


    return (
        <ThemeProvider theme={theme}>
            <Toaster position="top-right" />
            <Grid container>
                <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '10px' }}>
                    {(darkMode) ?
                        <IconButton onClick={e => setDarkMode(false)} aria-label='Sun' color='light'>
                            <WbSunnyIcon />
                        </IconButton>
                        :
                        <IconButton onClick={e => setDarkMode(true)} aria-label='Moon' color='dark'>
                            <ModeNightIcon />
                        </IconButton>
                    }
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Theme
