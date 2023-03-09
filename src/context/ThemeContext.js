import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode') || true))
    const dark = { backgroundColour: '#444444', textColour: '#FAF9F6'}
    const light = { backgroundColour: '#FAF9F6', textColour: '#444444'}

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode, dark, light}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider