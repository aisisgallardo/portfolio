import React from 'react';
import logo from './images/logo-name.svg';
import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import './components/Buton.css';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo logoatom = {logo} />
       <Menu  />
      </header>

      <div>
        {/*<About/> */}        
        {  /*<Home /> */}
        <Outlet />
      </div>


    </div>

  );
}

export default App;
