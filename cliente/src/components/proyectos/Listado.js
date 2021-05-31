import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio Web'}
    ]

    return ( 
        <ul className="listado-proyectos">

        </ul>
     );
}
 
export default ListadoProyectos;