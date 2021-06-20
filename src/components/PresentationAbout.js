import React from 'react';
import presentation from '../images/cv-gavi.gif'

const Presentation = ({inView}) => {
    return ( 
        <div className={`content-rigth ${inView?'effect-right':''}` }>
            <img src={presentation} className='About-presentation img' alt='presentation' width="300" height="300" />
        </div>
    )
};
export default Presentation;