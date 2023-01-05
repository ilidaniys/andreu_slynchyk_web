import React, { useState } from 'react'
import LinkLayout from '../../components/layout/LinkLayout'
import RegisterForm from '../../components/registerComponent/RegisterForm'
import InputComponent from '../../components/registerComponent/InputComponent'


const Register = () => {
    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <LinkLayout>
            <RegisterForm
                numberOfInput={3}
                submitLink={'/login'}
                submitText={'Submit!'}
                navigateLink={'/login'}
                navigateText={'Login in existed account!'}
            >
                <InputComponent
                    handler={inputHandler}
                    value={value}
                    type={'email'}
                >Provide email:</InputComponent>
                <InputComponent
                    handler={inputHandler}
                    value={value}
                    type={'password'}
                >
                    Enter new password:
                </InputComponent>
                <InputComponent
                    handler={inputHandler}
                    value={value}
                    type={'password'}
                >
                    Confirm new password:
                </InputComponent>
            </RegisterForm>
        </LinkLayout>
    )
}

export default Register
