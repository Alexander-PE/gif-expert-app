// import React, {useEffect, useState} from 'react'
import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({categoria}) => {


    const { data:images } = useFetchGifs(categoria); // renombramos data a images en este archivo


    return (
        <>
            <h3>{categoria}</h3>

            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem key={img.id} {...img}/>
                        ))
                    }
            </div>
        </>
    )
}
