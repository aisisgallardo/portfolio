import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWorkData } from '../data/workdata';

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
            <h1>title</h1>
            <img src={page.image} />
            {page.thumbs.map((thumb,index)=>{
                 return (
                    <>
                        <span>{thumb}</span>
                        <img src={"/images/"+thumb} alt="" />
                    </>
                 )
            })}
        </div>
    )
}
