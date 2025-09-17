import ListItems from "../../Molecula/ListItems/ListItems"
import AddComp from "../../Molecula/AddComponent/AddComp"
import Titulo from "../../Atomo/Titulo/Titulo"
import { useState, useEffect } from 'react'
import Selector from "../../Atomo/Selector/Selector"
import "./Lista.scss"
import "./ModoNoche.scss"

function Lista(){
    const [tarea, setTarea] = useState([]);
    const [ordenInverso, setOrdenInverso] = useState(true);
    const [modoOscuro, setModoOscuro] = useState(false);
    
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

    function cambioDeModo() {
        setModoOscuro(!modoOscuro);
    }

    useEffect(() => {
        if (modoOscuro){
            document.body.classList.add("dark-mode")
        } else { 
            document.body.classList.remove("dark-mode");
         }
    }, [modoOscuro]);

    return (
        <>
        <button onClick={cambioDeModo}>
            {modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
        <div className='Contenedor'>
            <Titulo style={{ color: modoOscuro ? '#ffffff' : '#2c3e50' }}>Lista de Luciano Sigot</Titulo> 
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
                                completa={t.completa}
                                style={{ textDecoration: t.completa ? 'line-through' : 'none' }}
                                styleColor= {{color: modoOscuro ? '#1e1e1e;' : '#ffffff'}}
                                tarea={t.texto}
                                onEliminar={() => eliminarTarea(obtenerIndiceReal(index))} 
                            />
                        </li>
                    ))}
                </ol>
            )}
        </div>
        </>
    );
    
}

export default Lista;
