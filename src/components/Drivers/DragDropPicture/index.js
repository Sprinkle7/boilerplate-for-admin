import React from "react";
import { Input } from "reactstrap";
import './style.scss'

const DragDropPicture = (props) => {
    const { customeClass, onChange, selectedFile, tileName } = props

    return (
        <div className={`profile__picture__wrap ${customeClass}`}>
            <Input type='file' onChange={(e) => { onChange(e, tileName) }} />
            {
                selectedFile ?
                    <div className='image__tag'>
                        <img src={URL.createObjectURL(selectedFile)} alt='Profile' />
                    </div>
                    :
                    <span className='content__holder'> Drag photo or click here to upload photo  </span>
            }
        </div>
    )
}

export default DragDropPicture;