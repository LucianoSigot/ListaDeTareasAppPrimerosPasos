import "./Boton.css"

function Boton({children, tipo, onClick}){
    return (
      <button className={tipo} onClick={onClick}>{children}</button>
    )
}

export default Boton;