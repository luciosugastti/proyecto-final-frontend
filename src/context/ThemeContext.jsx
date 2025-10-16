import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "normal");

  // Aplica los cambios en el body y guarda en localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const toggleTheme = (value) => setTheme(value);
  const changeLanguage = (value) => setLanguage(value);
  const changeFontSize = (value) => setFontSize(value);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, changeLanguage, fontSize, changeFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);