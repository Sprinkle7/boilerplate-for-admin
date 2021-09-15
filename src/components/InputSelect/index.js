import React from "react";
import Select from 'react-select'
import './style.scss'

const InputSelect = (props) => {
    const { placeholder, label, name, inputClass, onChange, value, options, validation } = props
    let validationCheck = validation === true ? 'red--borders' : ''

    return (
        <div className={`select__tile__main ${validationCheck}`}>
            <label>{label}</label>
            <div className='input__tile'>
                <Select
                    name={name}
                    placeholder={placeholder}
                    className={`${inputClass}`}
                    onChange={(e) => { onChange(name, e) }}
                    value={value}
                    options={options}
                />
            </div>
        </div>
    )
}

export default InputSelect;