import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
// import Header from './Header';
import AboutMe from './AboutMe';
import Languages from './Languages';

function App() {

  return (
   <div className="app">
  <AboutMe/>
   <Languages/>
   </div>
  );
}

export default App;
