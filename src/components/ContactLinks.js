import React from 'react';

const ContactLink = (props) => {
    return (
        <a href={props.link} className="a-link" > 
            <div className="gradient-border" >
                <div className="gradient-border__border special-border" >
                    <img src={props.img} alt="icon-mail" className="img-icon" />
                    {props.label}
                </div>  
            </div>
        </a>
    )
}
export default ContactLink;



