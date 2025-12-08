import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved preference, default to light
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Apply theme class to document root
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Set CSS variable for cursor color
    document.documentElement.style.setProperty('--cursor-color', isDark ? '#C9A227' : '#0A1A4A');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark
      ? {
          // Dark theme colors
          background: '#000000', // Jet Black
          primary: '#C9A227', // Gold Accent
          secondary: '#E8DCC4', // Warm Beige
          text: '#C7C7C7', // Soft Gray
        }
      : {
          // Light theme colors
          background: '#FFFFFF', // White
          primary: '#0A1A4A', // Navy Blue
          secondary: '#C0C5CE', // Metallic Silver
          text: '#0A1A4A', // Navy Blue for text
        },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

