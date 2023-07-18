import { useEffect, useState } from 'react';
import './style.css';
import { ThemeContext } from './contextProviders/themeProvider';
import { Editor, getMockBrand, getMockFolders } from './index';

const App = () => {

  const [folders, setFolders] = useState([]);
  const [brand, setBrand] = useState([]);


  useEffect(() => {
    getMockFolders().then(foldersRes => {
      getMockBrand().then(brandRes => {
        setBrand(brandRes);
        setFolders(foldersRes);
      })
    });
  }, []);

  const [theme, _] = useState(['dark', 'light'][Math.random(0, 1)]);
  return (
    <ThemeContext.Provider value={theme}>
      {folders.length == 0 && <div><h1>Loading...</h1></div>}
      {folders.length > 0 && <Editor {...{ folders, brand }} />}
    </ThemeContext.Provider>
  );
}

export { App };

