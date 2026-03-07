import React, { createContext, useContext, useState, useEffect } from 'react';

// Default black plus the 4 unique variants the user requested
// Invert logic: Black turns white. Colorful dark themes turn into a bright pastel version of themselves.
const THEMES = [
    { bg: '#0a0a0a', invertBg: '#ffffff', invertText: '#0a0a0a' }, // Black -> White
    { bg: '#3d1f1f', invertBg: '#fecaca', invertText: '#3d1f1f' }, // Dark Red -> Light Red
    { bg: '#2b284a', invertBg: '#c7d2fe', invertText: '#2b284a' }, // Dark Indigo -> Light Indigo
    { bg: '#284029', invertBg: '#bbf7d0', invertText: '#284029' }, // Dark Green -> Light Green
    { bg: '#40391f', invertBg: '#fef08a', invertText: '#40391f' }, // Dark Yellow -> Light Yellow
];

interface ThemeContextType {
    themeIndex: number;
    currentThemeColor: string;
    nextThemeColor: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeIndex, setThemeIndex] = useState(0);

    const toggleTheme = () => {
        setThemeIndex((prevIndex) => (prevIndex + 1) % THEMES.length);
    };

    const currentTheme = THEMES[themeIndex];
    const nextTheme = THEMES[(themeIndex + 1) % THEMES.length];

    useEffect(() => {
        // Smooth transition effect for the body background
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.backgroundColor = currentTheme.bg;

        // Expose CSS variables for dynamic hover inversions across the app
        document.documentElement.style.setProperty('--invert-bg', currentTheme.invertBg);
        document.documentElement.style.setProperty('--invert-text', currentTheme.invertText);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{
            themeIndex,
            currentThemeColor: currentTheme.bg,
            nextThemeColor: nextTheme.bg,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
