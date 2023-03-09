import React, { useContext, useState, useEffect } from 'react'
import { Grid, Stack } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Links = () => {
    const [background, setBackground] = useState('')

    const { darkMode, light, dark } = useContext(ThemeContext)

    useEffect(() => {
        if (darkMode) {
            setBackground(light.backgroundColour)
        } else {
            setBackground(dark.backgroundColour)
        }
    }, [darkMode, dark, light])

    return (
        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack direction="row" spacing={2}>
                <IconButton href='https://www.github.com/maxt41' aria-label="Github" style={{ color: background }}>
                    <GitHubIcon />
                </IconButton>
                <IconButton href='https://uk.linkedin.com/in/max-thomas-b1522624a' aria-label="Linkedin" style={{ color: background }}>
                    <LinkedInIcon />
                </IconButton>
            </Stack>
        </Grid >
    )
}

export default Links