import React, {Fragment, useState} from 'react';

const NuevoProyecto  = () => {

    //state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''

    })

    //extraer nombre de proyecto
    const {nombre} = proyecto;

    //lee el contenido del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el ususario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //validar el proyecto

        //agregar al state

        //reiniciar form
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo proyecto</button>

            <form
                className="formunlario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input 
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Agregar proyecto"
                />

            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto ;