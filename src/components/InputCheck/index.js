import React from "react";
import { Input } from "reactstrap";
import './style.scss'

const InputCheck = (props) => {
    const { label, name, inputClass, onChange, customClass, value } = props
    let checkValueType = Array.isArray(value)
    let checkedInput = checkValueType ? value.includes(name) ? true : false : ''
    return (
        <div className={`check__tile__main ${customClass}`}>
            <div className="form-check">
                <label className="form-check-label">
                    <span>
                        <Input type="checkbox" name={name} checked={checkedInput} className={`form-control ${inputClass}`} onChange={() => { onChange(name) }} />
                        <i></i>
                    </span>
                    {label}
                </label>
            </div>
        </div>
    )
}

export default InputCheck;