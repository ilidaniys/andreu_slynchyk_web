import React, { FC } from 'react'
import { defaultComponent } from '../../types/defaultTypes'

const TittleStyled: FC<defaultComponent> = (props) => {
    return (
        <h1 className={'font-bold text-gray-200 text-4xl'}>
            {props.children}
        </h1>
    )
}

export default TittleStyled
