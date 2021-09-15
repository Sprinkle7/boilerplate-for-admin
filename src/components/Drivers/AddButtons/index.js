import React from "react";
import { Button } from "reactstrap";

const AddButton = (props) => {
    const { cancelButton, next, currentForm } = props
    let nextBtnTitle = currentForm === 1 ? 'Continue' : currentForm === 2 ? 'Next' : 'Create Driver'
    let backBtnTitle = currentForm === 1 ? 'Cancel' : currentForm === 2 ? 'Back' : 'Back'
    return (
        <div className='form__action__button'>
            <Button className='theme__btn --default mr-2' onClick={() => { cancelButton() }}>{backBtnTitle}</Button>
            <Button className='theme__btn' onClick={() => { next() }}>{nextBtnTitle}</Button>
        </div>
    )
}

export default AddButton;