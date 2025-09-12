import ListItems from '../Molecula/ListItems'
import AddComp from '../Molecula/AddComp'
import Titulo from '../Atomo/Titulo'
import { useState } from 'react'
function Lista (){
    const [tarea, setTarea] = useState([]);

    function agregarTarea(nuevaTarea){
        setTarea (...tarea, nuevaTarea);
    }

    return(
        <div className='Contenedor'>
            <Titulo>Lista de Luciano Sigot</Titulo>
            <AddComp onCambio = {agregarTarea}></AddComp>
            <ol>
                <li><ListItems tarea={tarea}></ListItems></li>
            </ol>
        </div>
    )
}
export default Lista;