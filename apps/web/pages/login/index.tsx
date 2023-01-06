import React, { FC, FormEvent, useEffect, useState } from 'react'
import LinkLayout from '../../components/layout/LinkLayout'
import RegisterForm from '../../components/registerComponent/RegisterForm'
import InputComponent from '../../components/registerComponent/InputComponent'
import { useRouter } from 'next/router'

const EMAIL_REGEX = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

const Index: FC = () => {

    const router = useRouter()

    const [valueEmail, setEmail] = useState('')
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
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (errorEmail || errorPassword) router.replace('/home').catch(e => console.log(e))
    }

    useEffect(() => {
        if (!touchedEmail) setErrorEmail(false)
        if (!validEmail && touchedEmail) setErrorEmail(true)

    }, [valueEmail, touchedEmail])

    useEffect(() => {
        if (!touchedPassword) setErrorPassword(false)
        if (!validPassword && touchedPassword) setErrorPassword(true)

    }, [valuePassword, touchedPassword])

    return (
        <LinkLayout>
            <RegisterForm
                numberOfInput={2}
                submitLink={'/home'}
                submitText={'Submit!'}
                navigateLink={'/login/register'}
                navigateText={'Register new account!'}
                submitHandler={submitHandler}
            >
                <InputComponent
                    handler={inputEmailHandler}
                    value={valueEmail}
                    type={'email'}
                    valid={errorEmail}>
                    email</InputComponent>
                <InputComponent
                    handler={inputPasswordHandler}
                    value={valuePassword}
                    type={'password'}
                    valid={errorPassword}>
                    Password</InputComponent>
            </RegisterForm>
        </LinkLayout>
    )
}

export default Index
