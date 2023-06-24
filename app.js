import { createContext, useContext, useState } from 'react';
import { Editor } from './components/Editor';
import './style.css';
import { ThemeContext } from './contextProviders/themeProvider';

const App = () => {
  const [theme, setTheme] = useState(['dark', 'light'][Math.random(0, 1)]);
  return (
    <ThemeContext.Provider value={theme}>
      < Editor />
    </ThemeContext.Provider>
  );
}


export { App };

