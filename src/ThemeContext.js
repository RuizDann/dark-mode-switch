import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    }

export const useTheme = () => {
    const value = React.useContext(ThemeContext);
    return value;
    }