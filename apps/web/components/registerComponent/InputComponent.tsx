import React, { FC, useId } from 'react'

interface InputProps {
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string;
    valid: boolean;
    type: string;
    children: React.ReactNode
}

const InputComponent: FC<InputProps> = (props) => {
    const id = useId()
    return (

        <div className={'w-full px-12 flex flex-col gap-3 h-[8rem]'}>
            <label htmlFor={id}
                   className={'text-xl text-gray-50 cursor-pointer capitalize font-bold peer-invalid:text-red-700'}>{props.children}</label>
            <input type={props.type}
                   id={id}
                   className={`input-primary ${!props.valid ? 'input-valid' : 'input-non-valid'}`}
                   onChange={(e) => props.handler(e)}
                   value={props.value}
                   required
            />
            <p className='invisible peer-invalid:visible text-red-500 text-sm'>
                Please provide a valid email address.
            </p>
        </div>
    )
}


export default InputComponent
