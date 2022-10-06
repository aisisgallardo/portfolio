import React from 'react';
import logo from './images/logo-name.svg';
import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Home from './components/Home';
import './components/Menu.css';
import About from './components/About';
import './components/Buton.css';
import './components/About.css';
import Skills from  './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo logoatom = {logo} />
       <Menu  />
      </header>

      <div>
          {/* <About/> */}
          <Skills />
      </div>


    </div>

  );
}

export default App;
