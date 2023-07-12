import { ReactNode, createContext, useState } from "react"

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const initialThemeContext: ThemeContextType = {
    isDark: false,
    toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextType>( initialThemeContext );

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [ isDark, setIsDark ] = useState<boolean>(initialThemeContext.isDark)

    const toggleTheme = () => setIsDark(!isDark)

    const themeContextValue: ThemeContextType = {
        isDark,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={themeContextValue}>
            { children }
        </ThemeContext.Provider>
    )
}
