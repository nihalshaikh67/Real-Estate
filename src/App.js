import React from 'react';
import './index.css';
import Header from './components/Header';
import Howitwork from './components/Howitwork';
import About from './components/About';
import Agent from './components/Agent';
import Proporties from './components/Proporties';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header/>
      <Howitwork/>
      <About/>
      <Agent/>
      <Proporties/>
      <Contact/>
    </>
  )
}

export default App
