import ListItems from '../Molecula/ListItems'
import AddComp from '../Molecula/AddComp'
import Titulo from '../Atomo/Titulo'
import { useState } from 'react'
import Selector from '../Atomo/Selector'

function Lista(){
    const [tarea, setTarea] = useState([]);
    const [ordenInverso, setOrdenInverso] = useState(true);
    
    function agregarTarea(nuevaTarea){
        if(nuevaTarea.trim() !== "") {
            setTarea([...tarea, { texto: nuevaTarea, completa: false }]);
        }
    }

    function eliminarTarea(indice){
        setTarea(tarea.filter((_, index) => index !== indice));
    }
    
    function tareaCompletada(indice){
        setTarea(tarea.map((t, i) => {
            if(i === indice) {
                return { ...t, completa: !t.completa };
            }
            return t;
        }));
    }

    function obtenerListaOrdenada(tareas, ordenInverso){
        if(ordenInverso) {
            return [...tareas];
        }
        return [...tareas].reverse();
    }
    
    function obtenerIndiceReal(indiceActual) {
        return ordenInverso ? indiceActual : tarea.length - 1 - indiceActual;
    }

    return (
        <div className='Contenedor'>
            <Titulo>Lista de Luciano Sigot</Titulo> 
            <div className="controles">
                <AddComp onCambio={agregarTarea} />
                <Selector valor={ordenInverso} onCambio={setOrdenInverso} />
            </div>
            {tarea.length === 0 ? (
                <p className="lista-vacia">No hay tareas, la lista está vacía</p>
            ) : (
                <ol>
                    {obtenerListaOrdenada(tarea, ordenInverso).map((t, index) => (
                        <li key={index}>
                            <ListItems 
                                onClick={() => tareaCompletada(obtenerIndiceReal(index))}
                                style={{ textDecoration: t.completa ? 'line-through' : 'none' }}
                                tarea={t.texto}
                                onEliminar={() => eliminarTarea(obtenerIndiceReal(index))} 
                            />
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default Lista;
