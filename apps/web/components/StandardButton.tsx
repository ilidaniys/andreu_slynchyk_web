import React, { FC, useLayoutEffect, useState } from 'react'
import { defaultComponent } from '../types/defaultTypes'

interface IButton extends defaultComponent {
    size?: string,
    executor: () => void
}

const StandardButton: FC<IButton> = ({ size = 'l', executor, children }) => {

    const [componentFontSize, setComponentFontSize] = useState('6xl')
    const [componentWidth, setComponentWidth] = useState('w-2/5')

    useLayoutEffect(() => {
        switch (size) {
            case 'l':
                setComponentFontSize('4xl')
                setComponentWidth('w-[15rem]')
                break
            case 'xl':
                setComponentFontSize('6xl')
                setComponentWidth('w-[18rem]')
                break
            default:
                setComponentFontSize('w-2/5')
                setComponentWidth('6xl')
        }
    }, [size])

    return (
        <button
            className={`text-${componentFontSize} border text-gray-50 ${componentWidth} 2lg:w-1/3 p-2 hover:bg-gray-400 hover:text-gray-800 transition-all delay-250`}
            onClick={executor}
        >
            {children}
        </button>
    )
}

export default StandardButton
