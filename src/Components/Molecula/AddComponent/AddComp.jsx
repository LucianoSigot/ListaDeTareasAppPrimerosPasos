import Boton from "../../Atomo/Boton/Boton"
import InputText from "../../Atomo/InputText/InputText"
import { useState } from "react";

function AddComp({onCambio}) {
    const [texto, setTexto] = useState("");

    function agregarTexto(e){
        e.preventDefault();
        onCambio(texto); // Pasamos el texto como parámetro
        setTexto(""); // Limpiamos el input después de agregar
    }
    const handleChange = (e) => {
        setTexto(e.target.value);
    };

    return (
        <>
            <InputText mensaje="Agregar tarea" value={texto} onChange={handleChange}/>
            <Boton tipo={"boton_agregar"} onClick= {agregarTexto}>Agregar</Boton>
        </>
    )
}
export default AddComp;