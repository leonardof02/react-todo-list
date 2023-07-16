import { ReactNode } from "react";
import { Theme } from "../styles/ThemeContext";
import "../styles/themes.css";
import "../index.css";

interface ThemeProviderProps {
    theme: "light" | "dark";
    children: ReactNode | ReactNode[];
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
    return <Theme.Provider value={theme}>
        <main className={ theme === "dark" ? "dark-theme" : "light-theme" }>
            { children }
        </main>
    </Theme.Provider>;
}
