import React, { useContext, useState } from 'react'
import { Grid, Avatar, Badge, Typography } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const [badgeContent, setBadgeContent] = useState('+')

    const { darkMode, dark, light } = useContext(ThemeContext)

    const handleClick = () => {
        if (darkMode) {
            navigator.clipboard.writeText(`maxhthomas@outlook.com`)
            toast.success('Email Copied!', {
                style: {
                    background: light.backgroundColour,
                    color: light.textColour,
                }
            })
        } else {
            navigator.clipboard.writeText(`maxhthomas@outlook.com`)
            toast.success('Email Copied!', {
                style: {
                    background: dark.backgroundColour,
                    color: dark.textColour,
                }
            })
        }
        setBadgeContent('✓')
    }

    return (
        <Grid container>
            <Toaster position="top-right" />
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Badge onClick={handleClick} badgeContent={badgeContent} color="primary" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} className='header_avatar'>
                    <Avatar sx={{ width: 90, height: 90, bgcolor: 'pink', color: 'black', fontWeight: 'bold', letterSpacing: '0.15em' }}>MT</Avatar>
                </Badge>

            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Typography variant='subtitle' align='center'>
                    MERN Developer
                </Typography>
            </Grid>
        </Grid >
    )
}

export default Header