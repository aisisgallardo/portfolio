import React from 'react';
import Buton from './Buton.css';
import AboutContent from './AboutContent';
import {useInView} from 'react-intersection-observer';
import img from '../images/icon-mail.png';
import img1 from '../images/icon-in.png';
import img2 from '../images/icon-git.png';
import ContactLink from './ContactLinks';


const About = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });

return( 
    <React.Fragment>
    <main ref={ref}  className="about-container">
        <div className="container-directionright">
            <div className={`content-rigth ${inView?'effect-right':''}` }>
                <AboutContent />
            </div>                
        
        </div>
        <div className="container-directionleft">
            <div className={`content-left ${inView?'effect-left':''}` }>
                <div className="title-right">Salut!</div>
                <p className="paragraph-right">Je suis une passionate about interactive media, and in an age of digital I believe bringing design to life with code is essential. So, I specialise in a multi-disciplined approach to my work incorporating design and development.</p>
            </div>
        </div>
    </main>

    
    <div className="about-horizontalcontainer">
        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                <ContactLink link="mailto:aisisgallardo@gmail.com"  img={img}  label="aisisgallardo@gmail.com"/>
            </div>
        </div>
        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                <ContactLink link="https://www.linkedin.com/in/alondra-gallardo/"  img={img1}  label="Linkedin ˇ "/>
            </div>
        </div>

        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                <ContactLink link="https://github.com/aisisgallardo"  img={img2}  label="GitHub ˇ "/>

            </div>
        </div>
    </div>


    

    <div className="about-horizontalcontainer">
        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                Hello
            </div>
                <p className="horizontal-paragraph">I am passionate about interactive media, and in an age of digital I believe bringing design to life with code is essential. So, I specialise in a multi-disciplined approach to my work incorporating design and development.</p>

        </div>
        <div className="horizontal-firstcolumn">
            <div className="horizontal-title">
                Salut
            </div>
            <p className="horizontal-paragraph">Je suis une passionate about interactive media, and in an age of digital I believe bringing design to life with code is essential. So, I specialise in a multi-disciplined approach to my work incorporating design and development.</p>
        </div>
    </div>


   <div className="about-container" >
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