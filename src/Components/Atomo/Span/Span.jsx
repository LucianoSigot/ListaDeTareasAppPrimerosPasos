import "./Span.css"
function Span({children, style, styleColor}){
    return(
        <span style={style} styleColor={styleColor}>{children}</span>
    )
}

export default Span;