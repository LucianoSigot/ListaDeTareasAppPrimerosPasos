
function Boton({children, tipo}){

  function manejador(){
  }
    return (
      <button className={tipo} >{children}</button>
    )
}

export default Boton;