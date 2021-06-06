import React from 'react';
import Menu from './Menu';

const MenuItem = function (props) {
    return(
    <a
        className="Menu-item"
        href={props.link}
        target="_self"
        rel="noopener noreferrer"
    >
        {props.children}
    </a>


    )

};

export default MenuItem;