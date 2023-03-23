import React, { useState, useContext, useEffect } from 'react'
import { Accordion, Grid, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeContext } from '../context/ThemeContext';
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from '@mui/icons-material/Source';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';

const Dropdown = () => {
    const [expanded, setExpanded] = useState(false);
    const [background, setBackground] = useState('')
    const [text, setText] = useState('')

    const { darkMode, light, dark } = useContext(ThemeContext)

    useEffect(() => {
        if (darkMode) {
            setBackground(light.backgroundColour)
            setText(light.textColour)
        } else {
            setBackground(dark.backgroundColour)
            setText(dark.textColour)
        }
    }, [darkMode, dark, light])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')} style={{ width: '80%', maxWidth: '50vh', background: background, color: text }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: text }} />} >
                        <SourceIcon /> Personal Projects
                    </AccordionSummary>
                    <Divider style={{ borderColor: text }} />
                    <AccordionDetails>
                        <li><a href='https://mtlinktree.netlify.app/' style={{ color: text }}>Linktree Clone</a></li>
                        <li><a href='https://mtlastpass.netlify.app/' style={{ color: text }}>LastPas Clone</a></li>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: '80%', maxWidth: '50vh', background: background, color: text }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: text }} />} >
                        <WorkIcon /> Professional Projects
                    </AccordionSummary>
                    <Divider style={{ borderColor: text }} />
                    <AccordionDetails className='dropdown_technologies'>
                        <li>Digital Marketing Web App</li>
                        <ul>
                            <li>REST API created in NodeJs with Express</li>
                            <li>Database using MongoDB and Mongoose</li>
                            <li>Responsive frontend created in React</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ width: '80%', maxWidth: '50vh', background: background, color: text }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: text }} />}>
                        <CodeIcon /> Technology Stack
                    </AccordionSummary>
                    <Divider style={{ borderColor: text }} />
                    <AccordionDetails className='dropdown_technologies'>
                        <li>Javascript</li>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>React</li>
                        </ul>
                        <li>MongoDB</li>
                        <ul>
                            <li>
                                Mongoose
                            </li>
                        </ul>
                        <li>REST API</li>
                        <li>Git & Github</li>
                        <li>Styling</li>
                        <ul>
                            <li>React-Bootstrap</li>
                            <li>MUI</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid >
        </Grid >
    )
}

export default Dropdown
