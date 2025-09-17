import "./InputCheckBox.scss"
function InputCheckBox({onChange, checked}) {
    return (
        <input type="checkbox" className="checkBox" onChange={onChange} checked={checked}/>
    )
}

export default InputCheckBox;