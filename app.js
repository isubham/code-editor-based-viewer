import { createContext, useContext, useState } from 'react';
import { Editor } from './components/Editor';
import './style.css';
import { ThemeContext } from './contextProviders/themeProvider';

const App = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      < Editor />
    </ThemeContext.Provider>
  );
}


export { App };

