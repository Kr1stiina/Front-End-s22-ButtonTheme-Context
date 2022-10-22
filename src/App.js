import React, { useState, useEffect } from 'react';
import Header from './Header';
import ThemeContext from './ThemeContext';
import StyleContext from './StyleContext';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {

  const [theme, setTheme] = useState('blue');
  const [style, setStyle] = useState({ theme: {} });


  useEffect(() => {
    setTheme('black');
    setStyle({ theme: buttonThemes });
  }, []);

  return (
    <StyleContext.Provider value={style}>
      <ThemeContext.Provider value={theme}>
        <Header />
      </ThemeContext.Provider>
    </StyleContext.Provider>
  );
}

export default App;
