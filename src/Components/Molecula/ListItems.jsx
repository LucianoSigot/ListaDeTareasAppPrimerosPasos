import Boton from "../Atomo/Boton"
import InputCheckBox from "../Atomo/InputCheckBox"
import Span from "../Atomo/Span"
function ListItems({tarea, onEliminar}){
    return(
        <>
            <InputCheckBox/>
            <Span>{tarea}</Span>
            <Boton tipo="eliminar" onClick={onEliminar}>Eliminar</Boton>
        </>
    )
}

export default ListItems;