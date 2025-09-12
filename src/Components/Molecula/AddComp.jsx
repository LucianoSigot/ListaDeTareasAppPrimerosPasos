import Boton from "../Atomo/Boton"
import InputText from "../Atomo/InputText"
function AddComp() {
    return (
        <>
            <InputText mensaje="Agregar tarea"/>
            <Boton tipo={"boton_agregar"}>Agregar</Boton>
        </>
    )
}
export default AddComp;