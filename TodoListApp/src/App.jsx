import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='todo-container'>
        <h1 className='todo-titulos'>Lista de tareas</h1>
        <div className='todo-input-contenedor'>
          <input type='text' placeholder='Ingrese el nombre de la tarea' className='todo-input'></input>
          <button className='boton-add'>ADD</button>
        </div>
        <div className='List-todo'>
           <div className='todo-item'>
              <input type="checkbox"></input>
              <span>Task N</span>
              <button className="boton-editar" >🖋️</button>
              <button className='boton-borrar'>❌</button>
           </div>
           <div className='todo-item'>
              <input type="checkbox"></input>
              <span>Task N-1</span>
              <button className="boton-editar">🖋️</button>
              <button className='boton-borrar'>❌</button>
           </div>
            <div className='todo-item'>
              <input type="checkbox" checked readOnly></input>
              <s><span>Completed Task N-2</span></s>
              <button className="boton-editar">🖋️</button>
              <button className='boton-borrar'>❌</button>
           </div>
            <div className='todo-item'>
              <input type="checkbox"></input>
              <span >Task k</span>
              <button className="boton-editar">🖋️</button>
              <button className='boton-borrar'>❌</button>
           </div>
            <div className='todo-item'>
              <input type="checkbox" ></input>
              <span>Task 2</span>
              <button className="boton-editar">🖋️</button>
              <button className='boton-borrar'>❌</button>
            </div>
            <div className='todo-item'>
              <input type="checkbox" checked readOnly></input>
              <s><span>Completed Task 2</span></s>
              <button className="boton-editar">🖋️</button>
              <button className='boton-borrar'>❌</button>
           </div>
        </div>
         
      </div>
    </>
  )
}

export default App
