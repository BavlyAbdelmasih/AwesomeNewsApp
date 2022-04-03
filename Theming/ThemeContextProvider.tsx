import React, {createContext, useState} from 'react';

const ThemeMode = {
  dark: 0,
  light: 1,
};
const Themes = [
  {
    backgroundColor: '#121212',
    textColor: 'yellow',
    tabBarBackground: 'rgb(241,241,241)',
    primaryColor: 'gray',
    secondaryColor: '#121212',
    secondaryTextColor: 'yellow',
  },
  {
    backgroundColor: 'rgb(241,241,241)',
    textColor: 'white',
    tabBarBackground: 'rgb(241,241,241)',
    primaryColor: 'rgb(241,241,241)',
    secondaryColor: 'white',
    secondaryTextColor: 'black',
  },
];

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
