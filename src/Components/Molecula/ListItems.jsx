import Boton from "../Atomo/Boton"
import InputCheckBox from "../Atomo/InputCheckBox"
import Span from "../Atomo/Span"

function ListItems(){
    return(
        <>
            <InputCheckBox/>
            <Span>Tarea 1</Span>
            <Boton>Eliminar</Boton>
        </>
    )
}

export default ListItems;