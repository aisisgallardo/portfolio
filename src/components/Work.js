import React from 'react';
import './Work.css';

import { getWorkData } from '../data/workdata';

import { Link } from 'react-router-dom';



const Work = () =>  {
    return (
        <div className="border-container ">
            <p className='horizontal-title'> Projects</p>
            <div className="container title-card">
                {
                    getWorkData().map((item,index)=>{
                        const quotient  = Math.floor(index / 3);

                        let nameclassContainer;
                        switch (quotient){
                            case 0:
                                nameclassContainer = "work-image-left";
                                break;
                            case 1:
                                nameclassContainer = "line-break";
                                break;
                            case 2:
                                nameclassContainer = "work-image-right";
                                break;

                        }
                        return (
                            <Link to={item.slug} className={"brick " + item.cssClass}>
                                <div className={nameclassContainer}>
                                    <img src={"/portfolio/" + item.image} className="img-card" alt=""/>
                                    {item.title} {/* {item.title + " " + (index+1)}*/}
                                </div>
                            </Link>
                        )
                    })
                }
            { /*
            <div className="item-1 hi green">
                <img src={apisandi} class="img-card" alt=""/>Apisandi 1</div>
            <div className="item-2">
                <img src={apisandi_products} class="img-card" alt=""/>Bien Natura 2</div>
            <div className="item-1">
                <img src={apisandi_store} class="img-card" alt=""/>D'artesanos 3</div>
            <div className="item-4 purple">
                <img src={hoho_intro} class="img-card" alt=""/>PNG 6000S</div>
            <div className="item-5 red">
                <img src={hoho} class="img-card" alt=""/>WEB f png</div>
            <div className="item-6 yellow">
                <img src={hoho_homepage} class="img-card" alt=""/> Hoho Collection</div>
            <div className="item-7">
                <img src={apisandi1} class="img-card" alt=""/>Cafe Oro</div>
            <div className="item-8">
                <img src={apisandi2} class="img-card" alt=""/>JPG 600</div>
            <div className="item-9">
                <img src={apisandi_products} class="img-card" alt=""/>PNG 600</div>
            <div className="item-10">
                <img src={apisandi_modal} class="img-card" alt=""/>Apisandi</div>
            <div className="item-11">
                <img src={hoho_store} class="img-card" alt=""/>Apisandi</div>
            <div className="item-12">
                <img src={hoho_catalog} class="img-card" alt=""/>Apisandi</div>
            <div className="item-13">
                <img src={kkaw} class="img-card" alt=""/>Apisa</div>            
            <div className="item-15">
                <img src={kkaw_blog} class="img-card" alt=""/>Apisandi </div>
            <div className="item-16">
                <img src={apisandi} class="img-card" alt=""/>Apisandi</div>
            <div className="item-17 img-card">
                <img src={lapaz} class="img-card" alt=""/> </div>
            <div className="item-18">
                <img src={lapaz_store} class="img-card" alt=""/> </div>
            <div className="item-19">
                <img src={dartesanos} class="img-card" alt=""/>Dartesanos</div>
            <div className="item-20">
                <img src={dartesanos_blog} class="img-card" alt=""/> </div>
            <div className="item-21">
                <img src={dartesanos_contact} class="img-card" alt=""/> </div>

            <div className="item-22">
                <img src={dartesanos_store} class="img-card" alt=""/> </div>
            <div className="item-21">
                <img src={dartesanos_catalogo} class="img-card" alt=""/> </div>

            <div className="item-22">
                <img src={severianos_menu} class="img-card" alt=""/>Severianos</div>
            <div className="item-23">
                <img src={severianos_heroe} class="img-card" alt=""/> </div>
            <div className="item-24">
                <img src={severianos} class="img-card" alt=""/> </div>
    */}
            </div>

        </div>
    )
};
export default Work;