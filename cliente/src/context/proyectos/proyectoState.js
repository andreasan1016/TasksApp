import React from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const proyectoState = props => {
    const initialState = {
        nuevoProyecto: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD

    return(
        <proyectoContext.Provider>
            {props.children}
        </proyectoContext.Provider>
    )
}