import React from 'react';
import Header from './components/header1'; // Importing the Header component
import Header2 from './components/header2'; // Importing the Header2 component
import  Section from './components/section'; // Importing the section component
import "./App.scss"

function App() {
  return (
    <div>
      <Header /> 
      <Header2 />
      <Section />
     
    </div>
  );
}

export default App;
