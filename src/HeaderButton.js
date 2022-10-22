import React from 'react';
import ThemeContext from'./ThemeContext';
import StyleContext from './StyleContext';


function HeaderButton() {

  const styleContext = React.useContext(StyleContext);
  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style = {styleContext.theme[themeContext]}>Press me</button>
    </div>
  );
}

export default HeaderButton;