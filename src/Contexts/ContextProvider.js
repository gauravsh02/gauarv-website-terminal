import React , { createContext, useContext, useEffect, useState } from 'react';
import config from '../utils/config.json';
import themes from '../utils/themes.json';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, _setTheme] = useState(themes[0]);

  useEffect(()=>{
    setTheme(localStorage.getItem('theme') || config.theme);
  },[]);

  const setTheme = (theme) => {
    if(theme === 'ls'){
      return `Available themes : ${Object.keys(themes).map(item => themes[item].name ) }.`;
    }
    const index = themes.findIndex((confTheme) => {
      return confTheme.name.toLowerCase() === theme;
    });
    if(index === -1 ){
      return `Theme '${theme}' not found. Try 'theme ls' to see the list of available themes.`;
    }
    _setTheme(themes[index]);
    localStorage.setItem('theme', theme);
    return `Theme ${themes[index].name} set successfully!`;
  }

  return (
    <StateContext.Provider value={{ theme, setTheme }} >
      { children }
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);