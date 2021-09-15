import React, { Fragment } from 'react'
import { Input, Button } from 'reactstrap';
import PasswordIcon from '../../../assets/img/password.svg'
import EmailIcon from '../../../assets/img/email.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
    // Props
    const { onChange, onSubmit, formData, loading, validation } = props
    const { email, password } = formData
    const validationForEmail= validation && email === '' ? 'red__border' : ''
    const validationForPassword = validation && password === '' ? 'red__border' : ''
    return (
        <Fragment>
            
            <div className={`input__wrap`}>
                <span className={`icons`}>
                    <img src={EmailIcon} alt='User Name'/>
                </span>
                <div className='input__main'>
                    <label className={`${validationForEmail}`}>User Name</label>
                    <Input type='text' placeholder='example@mail.com' value={email} name='email' onChange={(e) => { onChange('email', e.target.value) }} />
                </div>
            </div>

            <div className={`input__wrap`}>
                <span className={`icons`}>
                    <img src={PasswordIcon} alt='Password'/>
                </span>
                <div className='input__main'>
                    <label className={`${validationForPassword}`}>Password</label>
                    <Input type='password' placeholder='***********' name='Password' value={password} onChange={(e) => { onChange('password', e.target.value) }} />
                </div>
            </div>

            <div className='login__button'>
                <Button className='btn' onClick={() => { onSubmit() }}>
                    {loading ? <FontAwesomeIcon icon={faSpinner} className='fa-spin' /> : 'Log in'}
                </Button>
            </div>
        </Fragment>
    )
}

export default Form;