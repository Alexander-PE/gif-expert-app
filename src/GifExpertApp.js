import React, {useState} from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['One Punch'])


    return (
        <>
            <div>GifExpertApp</div>
            <AddCategoria setCategorias={setCategorias} categorias={categorias} />

            <hr/>

            <ol>
                { 
                    categorias.map(categoria => <GifGrid key={categoria} categoria={categoria}/> )
                }
            </ol>
        </>
    )
}
