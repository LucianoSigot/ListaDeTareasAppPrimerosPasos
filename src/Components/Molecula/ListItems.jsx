import Boton from "../Atomo/Boton"
import InputCheckBox from "../Atomo/InputCheckBox"
import Span from "../Atomo/Span"
function ListItems({tarea, onEliminar, onClick, style}){
    return(
        <>
            <InputCheckBox onClick={onClick}/>
            <Span style={style}>{tarea}</Span>
            <Boton tipo="eliminar" onClick={onEliminar}>Eliminar</Boton>
        </>
    )
}

export default ListItems;