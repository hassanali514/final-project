import React, { Component } from 'react';
import { useTheme } from './component/Theme/ThemeContext';
// import logo from './logo.svg';
// import './App.css';

const App = () => {

  const { isBlackAndWhite, toggleTheme } = useTheme();

  const color = isBlackAndWhite ? 'grey' : 'white';

  
    return (
        <div style={{background: color}}>
          <h1>Your Content Goes Here</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default App;
