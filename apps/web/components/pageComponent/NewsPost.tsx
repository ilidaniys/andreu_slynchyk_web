import React, { FC } from 'react'
import placeholder from '../../public/img/placeholder.png'
import Image from 'next/image'
import TittleStyled from '../textComponents/TittleStyled'
import TextStyled from '../textComponents/TextStyled'

const NewsPost: FC = () => {
    return (
        <div className={'w-full'}>
            <TittleStyled> Tittle:</TittleStyled>
            <div
                className={'min-h-[10rem] h-fit w-full grid grid-flow-col border rounded-2xl cursor-pointer shadow-lg shadow-gray-50 hover:shadow-[#F78764] hover:border-[#F78764] transition duration-300 ease-in-out'}>
                <Image className={'p-5'} src={placeholder} alt={'placeholder'} />
                <TextStyled>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.</TextStyled>
            </div>
        </div>
    )
}

export default NewsPost
