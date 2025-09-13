import ListItems from '../Molecula/ListItems'
import AddComp from '../Molecula/AddComp'
import Titulo from '../Atomo/Titulo'
import { useState } from 'react'

function Lista (){
    const [tarea, setTarea] = useState([]);

    function agregarTarea(nuevaTarea){
        setTarea([...tarea,{ texto: nuevaTarea, completa: false }]);
    }

    function eliminarTarea(indice){
        setTarea(tarea.filter((_, index) => index !== indice));
    }
    
    function tareaCompletada(indice){
        setTarea(tarea.map(function(t, i){
            if(i === indice){
                return { texto: t.texto, completa: !t.completa}
            }else{
                return t;
            }
        }))
    }

    return (
        <div className='Contenedor'>
            <Titulo>Lista de Luciano Sigot</Titulo>
            <AddComp onCambio={agregarTarea} />
            {tarea.length === 0 ? (
                <p>No hay tareas, la lista está vacía</p>
            ) : (
                <ol>
                    {tarea.map((t, index) => (
                        <li key={index}>
                            <ListItems 
                                onClick={ () =>  tareaCompletada(index) }
                                style={{ textDecoration: t.completa ? 'line-through' : 'none', cursor: 'pointer' }}
                                tarea={t.texto} 
                                onEliminar={() => eliminarTarea(index)} 
                            />
                        </li>
                    ))}
                </ol>
               
            )}
        </div>
    )
}

export default Lista;
