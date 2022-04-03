import React, {createContext, useState} from 'react';
import {ThemeMode, Themes} from '../constants/constants';

const ThemeContext = createContext({
  theme: Themes[ThemeMode.light],
  toggleTheme: () => {},
});

const ThemeContextProvider = ({children}: any) => {
  const [themeState, setthemeState] = useState(Themes[ThemeMode.light]);
  function toggleTheme() {
    console.log('toggled');

    if (themeState === Themes[ThemeMode.dark]) {
      setthemeState(Themes[ThemeMode.light]);
    } else {
      setthemeState(Themes[ThemeMode.dark]);
    }
  }
  return (
    <ThemeContext.Provider
      value={{theme: themeState, toggleTheme: toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export {ThemeContext, ThemeContextProvider};
