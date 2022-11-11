import React from 'react';
import Buton from './Buton.css';
import './About.css';
import PresentationAbout from './PresentationAbout';
import PresentationDetail from './PresentationDetail';
import {useInView} from 'react-intersection-observer';
import img from '../images/icon-mail.png';
import img1 from '../images/icon-in.png';
import img2 from '../images/icon-git.png';
import ContactLink from './ContactLinks';
import AboutDetail from './AboutDetail';



const About = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });

return( 
    <React.Fragment>
    <main ref={ref}  className="row center-align">
        <div className="container-directionright">
            <PresentationAbout inView={inView} />
        </div>
        <div className="container-directionleft">
            <div className={`content-left ${inView?'effect-left':''}` }>
                <PresentationDetail />
            </div>
        </div>
    </main>

    
    <div className="horizontal-containergrey">
        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                <ContactLink link="mailto:aisisgallardo@gmail.com"  img={img}  customClass="special-border" >
                    aisisgallardo@gmail.com
                </ContactLink>
            </div>
        </div>
        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                <ContactLink link="https://www.linkedin.com/in/alondra-gallardo/"  img={img1} label=" ˇ" >
                    Linkedin 
                </ContactLink>
                
            </div>
        </div>

        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                <ContactLink link="https://github.com/aisisgallardo"  img={img2}  >
                    GitHub ˇ 
                </ContactLink>
            
            </div>
        </div>
    </div>


    
    <AboutDetail />

   <div className="horizontal-containergrey" >
        <div className="title-right">
             Iniciativo
        </div>
        {/*<div className="gradient-border container-directionright" height="200px">
            <a href="CV-EN.pdf" target="_blank" className={`a-download content-right ${inView?'effect-right':''}`}>
                <div className="gradient-border__border" > ⥥ Download resume ⥥ ˇ</div>
            </a>   
        
        </div>
        */}
        
    </div>






    </React.Fragment>
    )

}

export default About;