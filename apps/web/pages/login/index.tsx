import React, { FC, useEffect, useState } from 'react'
import LinkLayout from '../../components/layout/LinkLayout'
import RegisterForm from '../../components/registerComponent/RegisterForm'
import InputComponent from '../../components/registerComponent/InputComponent'

const EMAIL_REGEX = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

const Index: FC = () => {
    const [valueEmail, setValue] = useState('')
    const [valuePassword, setPassword] = useState('')

    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    const [touchedEmail, setTouchedEmail] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)


    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)


    const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedEmail(true)
        if (e.target.value.toLowerCase().match(EMAIL_REGEX)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
        setValue(e.target.value)
    }
    const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        if (!touchedEmail) setErrorEmail(false)
        if (!validEmail && touchedEmail) setErrorEmail(true)

    }, [valueEmail, touchedEmail])

    return (
        <LinkLayout>
            <RegisterForm
                numberOfInput={2}
                submitLink={'/home'}
                submitText={'Submit!'}
                navigateLink={'/login/register'}
                navigateText={'Register new account!'}
            >
                <InputComponent handler={inputEmailHandler} value={valueEmail} type={'email'}
                                valid={errorEmail}>email</InputComponent>
                <InputComponent handler={inputPasswordHandler} value={valueEmail} type={'password'}
                                valid={errorPassword}>Password</InputComponent>
            </RegisterForm>
        </LinkLayout>
    )
}

export default Index
