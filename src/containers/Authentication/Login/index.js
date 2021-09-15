import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { UserLogin, CheckAndSaveLoggedInData } from "../../../actions/users";
import './style.scss';
import Logo from '../../../assets/Logo@2x.png'
import Form from './form'

const Login = (props) => {

    // Props
    const { userLogin, CheckAndSaveLoggedInData, userLoading, history } = props

    // States
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [validation, setValidation] = useState(false)
    const [loading, setLoading] = useState(false)

    // Use Effect
    useEffect(() => { CheckAndSaveLoggedInData(); })
    useEffect(() => { setLoading(userLoading.loading) }, [userLoading])

    // OnChange Function
    const onChange = (name, value) => {
        const newFormData = { ...formData }
        newFormData[name] = value
        setFormData(newFormData)
    }

    // Submit Function
    const onSubmit = () => {
        const { email, password } = formData
        if (email !== '' && password !== '') {
            userLogin(formData)
        } else {
            setValidation(true)
        }
    }


    if (localStorage.length > 0) {
        history.push('/projects')
        return null;
    } else {
        return (
            <div className='login__page'>
                <div className='form__main'>
                    <div className='form__logo'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='error--message'>{userLoading && userLoading.failedMessage ? userLoading.failedMessage : ''}</div>
                    <div className='form__input'>
                        <Form
                            formData={formData}
                            loading={loading}
                            validation={validation}
                            userLoading={userLoading}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (value) => dispatch(UserLogin(value)),
        CheckAndSaveLoggedInData: () => dispatch(CheckAndSaveLoggedInData())
    }
}

const mapStateToProps = (state) => {
    return { userLoading: state.users.User }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)