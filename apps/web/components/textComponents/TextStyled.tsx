import React, { FC } from 'react'
import { defaultComponent } from '../../types/defaultTypes'

const TextStyled: FC<defaultComponent> = (props) => {
    return (
        <p className={'text-gray-50 p-5 w-full'}>
            {props.children}
        </p>
    )
}

export default TextStyled
