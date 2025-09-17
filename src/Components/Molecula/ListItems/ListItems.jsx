import Boton from "../../Atomo/Boton/Boton"
import InputCheckBox from "../../Atomo/InputCheckBox/InputCheckBox"
import Span from "../../Atomo/Span/Span"

function ListItems({tarea, onEliminar, onClick, style, completa, styleColor}){
    return(
        <>
            <InputCheckBox onChange={onClick} checked={completa} />
            <Span style={style} styleColor={styleColor}>{tarea}</Span>
            <Boton tipo={"boton_eliminar"} onClick={onEliminar}>Eliminar</Boton>
        </>
    )
}

export default ListItems;