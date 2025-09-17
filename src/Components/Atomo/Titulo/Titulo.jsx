import "./Titulo.css"
function Titulo ({children, style}){
    return (
        <h3 className="Titulo_lista" style={style}>{children}</h3>
    )
}

export default Titulo