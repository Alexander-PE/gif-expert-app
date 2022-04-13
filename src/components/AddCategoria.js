import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategoria = ({setCategorias, categorias}) => {

    const [Dato, setDato] = useState('')

    const handleAdd = (e) => {
        e.preventDefault(); // esto es para que no se refresque la pagina cada vez que enviemos el formulario
    
        if (Dato.trim().length > 2) {
            setCategorias([Dato, ...categorias]);
            setDato('');
        } else{
            alert('El nombre de la categoria debe tener al menos 3 caracteres');
        }
    }

    return (
        <form onSubmit={handleAdd}>
                <input type="text" value={Dato} onChange={ (e)=>{ setDato(e.target.value) } }/>
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}