import React from "react";
import { Input } from "reactstrap";
import './style.scss'

const InputTile = (props) => {
    const { type, placeholder, label, name, inputClass, onChange, value, tileName, validation } = props
    let validationCheck = validation === true ? 'red--borders' : ''
    return (
        <div className={`input__tile__main ${validationCheck}`}>
            <label>{label}</label>
            <div className='input__tile'>
                <Input type={type} name={name} value={value} placeholder={placeholder} className={`${inputClass}`} onChange={(e) => { onChange(name, e, tileName) }} />
            </div>
        </div>
    )
}

export default InputTile;