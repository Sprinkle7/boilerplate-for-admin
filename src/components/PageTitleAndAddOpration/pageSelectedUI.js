import React from "react";
import './style.scss'

const pageSelectedUi = (props) => {
    const { pageSelected } = props
    let firstCheck = pageSelected === 2 || pageSelected === 3 ? 'page--done' : ''
    let secondCheck = pageSelected === 3 ? 'page--done' : ''
    return (
        <div className='header__page__selected'>
            <div className='page__selected__main'>
                <div className='selected__same border__selected'>
                    <span className={`${pageSelected === 1 ? 'active' : ''} ${firstCheck}`}>1</span>
                    Driver Registration
                </div>
                <div className='selected__same border__selected'>
                    <span className={`${pageSelected === 2 ? 'active' : ''} ${secondCheck}`}>2</span>
                    Documents
                </div>
                <div className='selected__same'>
                    <span className={`${pageSelected === 3 ? 'active' : ''}`}>3</span>
                    Terms & Conditions
                </div>
            </div>
        </div>

    )
}

export default pageSelectedUi;