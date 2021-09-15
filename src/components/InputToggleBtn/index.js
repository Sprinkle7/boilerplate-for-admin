import React, { useState } from "react";
import { Button } from "reactstrap";
import './style.scss'

const InputToggleBtn = (props) => {
    const { labelOne, labelTwo, name, inputClass, onChange, value } = props
    const [toggle, setToggle] = useState(value)
    const buttonToggle = () => {
        setToggle(!toggle)
        onChange(name, !toggle) 
    }
    return (
        <div className={`input__toggle ${inputClass}`} onClick={() => { buttonToggle() }}>
            <span>{labelOne}</span>
            <Button className={`${toggle === true ? 'active--btn' : ''}`}></Button>
            <span>{labelTwo}</span>
        </div>
    )
}

export default InputToggleBtn;