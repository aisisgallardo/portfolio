import React from 'react';

const ContactLink = ({link,img,children,label,customClass}) => {
    return (
        <a href={link} className="a-link" > 
            <div className="gradient-border" >
                <div className={"gradient-border__border " + customClass}>
                    <img src={img} alt="icon-mail" className="img-icon" />
                    {children}
                    {label}
                </div>  
            </div>
        </a>
    )
}
export default ContactLink;



