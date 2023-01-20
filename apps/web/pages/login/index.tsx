import React, { FC, FormEvent, useState } from 'react'
import LinkLayout, { IMenu } from '../../components/layout/LinkLayout'
import RegisterForm from '../../components/registerComponent/RegisterForm'
import InputComponent from '../../components/registerComponent/InputComponent'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const EMAIL_REGEX = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

const Index: FC = () => {
    const router = useRouter()

    const [valueEmail, setEmail] = useState('')
    const [valuePassword, setPassword] = useState('')

    const [touchedEmail, setTouchedEmail] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)


    const inputEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedEmail(true)
        if (e.target.value.toLowerCase().match(EMAIL_REGEX)) {
            setErrorEmail(false)
        } else {
            setErrorEmail(true)
        }
        setEmail(e.target.value)
    }
    const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouchedPassword(true)
        if (e.target.value) {
            setErrorPassword(false)
        } else {
            setErrorPassword(true)
        }
        setPassword(e.target.value)
    }
    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(errorEmail, errorPassword)
        if (!errorEmail && !errorPassword && touchedEmail && touchedPassword) {
            console.log('here')
            const result = await signIn('Credentials', {
                userEmail: valueEmail,
                userPass: valuePassword,
                redirect: false,
            })
            console.log(result)
        }
    }
    const submitHandlerTest = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.replace('/news')
    }

    const menu: IMenu[] = [
        {
            executor: () => {
                router.replace('/')
            },
            tittle: 'Home',
        },
        {
            executor: () => {
                router.replace('/login')
            },
            tittle: 'Login',
        },
    ]
    return (
        <LinkLayout>
            <RegisterForm
                numberOfInput={2}
                submitLink={'/home'}
                submitText={'Submit!'}
                navigateLink={'/login/register'}
                navigateText={'Register new account!'}
                submitHandler={submitHandlerTest}
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
