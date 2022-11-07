import React from 'react';
import Menu from './Menu'
import {Link} from 'react-router-dom';

const MenuItem = function (props) {
    return(
    <Link
        className="Menu-item"
        to={props.link}
        
        rel="noopener noreferrer"
    >
        {props.children}
    </Link>


    )

};

export default MenuItem;