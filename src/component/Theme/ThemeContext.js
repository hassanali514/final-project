// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const toggleTheme = () => {
    setIsBlackAndWhite(prevState => !prevState);  
  };

  return (
    <ThemeContext.Provider value={{ isBlackAndWhite, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
