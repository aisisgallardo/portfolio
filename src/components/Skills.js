import React from 'react'
import javascriptIcon from '../images/js-icon.svg';
import html5Icon from '../images/html-icon.svg';
import css3Icon from '../images/css-icon.svg';
import joomlaIcon from '../images/joomla-icon.svg';
import englishIcon from '../images/en-language-icon.svg';
import frenchIcon from '../images/fr-language-icon.svg';
import spanishIcon from '../images/es-language-icon.svg';


import skilssCss from './Skills.css';
const SkillCard = ({imgUrl,title}) =>{
    return (
    <div className='skills__card'>
        <img className='skills_thumb' alt={title} src={imgUrl} />
        <span>{title}</span>
    </div>
    );
}
const Skills = () => {

    return (
        <div>
            <section>
                <h2>Technical Skills</h2>
                <div className='skills__list'>
                    <SkillCard  imgUrl={html5Icon} title='HTML5' />
                    <SkillCard  imgUrl={css3Icon} title='CSS3' />
                    <SkillCard  imgUrl={javascriptIcon} title='JavaScript' />
                    <SkillCard  imgUrl={joomlaIcon} title='Joomla CMS' />

                </div>
        
            </section>
            <section>
                <h2>Languages</h2>
                <div className='skills__list'>
                    <SkillCard  imgUrl={englishIcon} title='English' />
                    <SkillCard  imgUrl={frenchIcon} title='French' />
                    <SkillCard  imgUrl={spanishIcon} title='Spanish' />
                   
                </div>
        
            </section>
            <section>

            </section>
            
        </div>
    )
}

export default Skills;