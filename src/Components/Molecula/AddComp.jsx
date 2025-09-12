import Boton from "../Atomo/Boton"
import InputText from "../Atomo/InputText"
import { useState } from "react";

function AddComp(props) {
    const [texto, setTexto] = useState("");
    function agregarTexto(e){
        setTexto(e);
    }
    return (
        <>
            <InputText mensaje="Agregar tarea"/>
            <Boton tipo={"boton_agregar"}>Agregar</Boton>
        </>
    )
}
export default AddComp;