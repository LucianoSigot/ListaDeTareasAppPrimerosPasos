import Boton from "../Atomo/Boton"
import InputText from "../Atomo/InputText"
import { useState } from "react";

function AddComp({onCambio}) {
    const [texto, setTexto] = useState("");

    function agregarTexto(){
        onCambio();
        setTexto();
    }
    
    return (
        <>
            <InputText mensaje="Agregar tarea"/>
            <Boton tipo={"boton_agregar"}>Agregar</Boton>
        </>
    )
}
export default AddComp;