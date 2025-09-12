import Boton from "../Atomo/Boton"
import InputCheckBox from "../Atomo/InputCheckBox"
import Span from "../Atomo/Span"
function ListItems(tarea){
    return(
        <>
            <InputCheckBox/>
            <Span>{tarea.tarea}</Span>
            <Boton>Eliminar</Boton>
        </>
    )
}

export default ListItems;