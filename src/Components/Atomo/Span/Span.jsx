import "./Span.css"
function Span({children, style}){
    return(
        <span style={style}>{children}</span>
    )
}

export default Span;