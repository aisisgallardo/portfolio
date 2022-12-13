import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWorkData } from '../data/workdata';
import  './WorkDetail.css';

export const loaderWorkDetail = ({params}) => {
    console.log(params);
    const slug =params.slug;

    const page = getWorkData().find((item)=>{
        return item.slug === slug;
    });

    return page;
} 

export const WorkDetail = () =>{

    const page = useLoaderData();

    return (
        <div>
            <section className='detail'>
                <img className='detail__hero' src={"/portfolio/"+page.image} />
                <div className='detail__description'>
                    <h1>{page.title}</h1>
                    
                    <span className='detail__text'>{page.detail}</span>
                </div>
            </section>
           <h2>Showroom</h2>
           <section className='thumbs'>
            {page.thumbs.map((thumb,index)=>{
                    return (
                        
                            
                            <img src={"/portfolio/images/"+thumb} alt={page.title + " site thumb"} />
                        
                    )
                })}
            </section> 
           
        </div>
    )
}
