import "./InputText.css"
function InputText({mensaje, value, onChange}){
    
    return(
        <input type="text" placeholder={mensaje} value={value} onChange={onChange}/>
    )
}

export default InputText;