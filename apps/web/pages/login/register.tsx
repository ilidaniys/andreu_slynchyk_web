import React, { FormEvent, useState } from 'react'
import LinkLayout from '../../components/layout/LinkLayout'
import RegisterForm from '../../components/registerComponent/RegisterForm'
import InputComponent from '../../components/registerComponent/InputComponent'

const EMAIL_REGEX = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

const Register = () => {

    const [valueEmail, setEmail] = useState('')
    const [valuePassword, setPassword] = useState('')
    const [valueConfirmPass, setValueConfirmPass] = useState('')

    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validConfirmPass, setValidConfirmPass] = useState(false)

    const [touchedEmail, setTouchedEmail] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)
    const [touchedConfirmPass, setTouchedConfirmPass] = useState(false)

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedEmail(true)
        if (e.target.value.toLowerCase().match(EMAIL_REGEX)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
        setEmail(e.target.value)
    }
    const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedPassword(true)
        if (e.target.value) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
        setPassword(e.target.value)
    }
    const inputConfirmPassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedConfirmPass(true)
        if (e.target.value) {
            setValidConfirmPass(true)
        } else {
            setValidConfirmPass(false)
        }
        setValueConfirmPass(e.target.value)
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (errorEmail || errorPassword) return null
    }
    return (
        <LinkLayout>
            <RegisterForm
                numberOfInput={3}
                submitLink={'/login'}
                submitText={'Submit!'}
                navigateLink={'/login'}
                navigateText={'Login in existed account!'}
                submitHandler={submitHandler}
            >
                <InputComponent
                    handler={inputEmailHandler}
                    value={valueEmail}
                    type={'email'}
                    valid={validEmail}
                >Provide email:</InputComponent>
                <InputComponent
                    handler={inputPasswordHandler}
                    value={valuePassword}
                    type={'password'}
                    valid={validPassword}
                >
                    Enter new password:
                </InputComponent>
                <InputComponent
                    handler={inputConfirmPassHandler}
                    value={valueConfirmPass}
                    type={'password'}
                    valid={validConfirmPass}
                >
                    Confirm new password:
                </InputComponent>
            </RegisterForm>
        </LinkLayout>
    )
}

export default Register
