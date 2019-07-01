import React, { useState, useEffect } from 'react'

function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const themes = {
    light: {
      'background-color': '#ffffff',
      'accent-color': '#090909',
    },
    dark: {
      'background-color': '#090909',
      'accent-color': '#ffffff',
    },
  }

  function setTheme() {
    const theme = themes[currentTheme]
    Object.keys(theme).forEach(key => {
      const cssKey = `--${key}`
      const cssValue = theme[key]
      document.body.style.setProperty(cssKey, cssValue)
    })
  }

  function toggleTheme() {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }

  useEffect(() => {
    setTheme()
  }, [currentTheme])

  return <div className={`theme-switch${currentTheme === 'dark' ? ' dark' : ''}`} onClick={toggleTheme} />
}

export default ThemeSwitch
