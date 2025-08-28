import React, { useState, useEffect, useCallback, useMemo } from "react";

function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const themes = useMemo(
    () => ({
      light: {
        "background-color": "#ffffff",
        "accent-color": "#090909",
      },
      dark: {
        "background-color": "#090909",
        "accent-color": "#ffffff",
      },
    }),
    []
  );

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
  }, [currentTheme, themes]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    },
    [toggleTheme]
  );

  return (
    <div
      className={`theme-switch${currentTheme === "dark" ? " dark" : ""}`}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Switch to ${
        currentTheme === "light" ? "dark" : "light"
      } theme`}
    />
  );
}

export default ThemeSwitch;
