import React from 'react';
import MenuItem from './MenuItem';

const Menu = function (props) {
  return(
    <div className="Menu-container">
      <MenuItem link = "/" >
        Home
      </MenuItem>
      <MenuItem link = "/about" >
        About
      </MenuItem>
      <MenuItem link = "/work" >
        Work
      </MenuItem>
      <MenuItem link = "/skills" >
        Skills
      </MenuItem>
      <MenuItem link = "/keepintouch" >
        Keep in Touch
      </MenuItem>


    </div>
  )
};

export default Menu;