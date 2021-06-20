import React from 'react';
import {useInView} from 'react-intersection-observer';
import me1 from '../images/me.png';
import me2 from '../images/me2.png';




const AboutDetail = () => {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: false,
    });


    return (
        
    < div ref={ref} className="row1">
        <div className="container-scroll">
            <img src={me1} className={`scroll-top ${inView?'scroll-final': ''}`}/>
            <div className={`scroll-top delay-Y ${inView?'scroll-final': ''}`} >
                <p className="horizontal-title">Process</p>
                <p className="horizontal-paragraph">My work crosses a broad range of categories in the digital space, both from a design and a technical perspective, I believe in using the right tools for the job so don’t subscribe to following bandwagons.</p>
            </div>

        </div>
        <div className="container-scroll">
            <img src={me2}  className={`scroll-top delay ${inView?'scroll-final': ''}`} />
            <div className={`scroll-top delay-Yx ${inView?'scroll-final': ''}`} >
                <p className="horizontal-title">What I love?</p>
                <p className="horizontal-paragraph">I love the art, by analysing the job at hand for what it is, you can make informed decisions to ensure the right tools are used to solve the creative problem.</p>
            </div>

        </div>            
       
    </div>

    )

};

export default AboutDetail;
