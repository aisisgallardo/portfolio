import React from 'react';
import MenuItem from './MenuItem';

const Menu = function (props) {
  return(
    <div className="Menu-container">
      <MenuItem link = "temporal text" >
        Home
      </MenuItem>
      <MenuItem link = "temporal text" >
        About
      </MenuItem>
      <MenuItem link = "temporal text" >
        Work
      </MenuItem>
      <MenuItem link = "temporal text" >
        Skills
      </MenuItem>
      <MenuItem link = "temporal text" >
        Keep in Touch
      </MenuItem>


    </div>
  )
};

export default Menu;