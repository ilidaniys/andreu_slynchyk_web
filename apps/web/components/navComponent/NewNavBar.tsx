import React from 'react'
import Image from 'next/image'
import BgOrange from '../../public/img/StockChart.svg'
import StandardButton from '../StandardButton'
import { useRouter } from 'next/router'

const NewNavBar = () => {
    const router = useRouter()
    const buttonHandler = () => {
        return router.replace('/')
    }
    return (
        <div className={'fixed h-48 w-full'}>
            <div
                className={'fixed h-48 w-full overflow-hidden bg-fixed bg-center bg-cover z-10 -translate-y-36 shadow-lg shadow-gray-50 hover:shadow-[#F78764] hover:translate-y-0 transition duration-300 ease-in-out'}>
                <Image className={'-z-10'} src={BgOrange} alt={'meteor'} fill />
                {/*<Image className={'-z-10'} src={BgWhite} alt={'meteor'} fill />*/}
                <div className={'flex w-full h-full justify-around items-center'}>
                    <StandardButton executor={buttonHandler} size={'xl'}> Gallery</StandardButton>
                    <StandardButton executor={buttonHandler} size={'xl'}> News </StandardButton>
                    <StandardButton executor={buttonHandler} size={'xl'}> Account </StandardButton>
                </div>
            </div>
        </div>
    )
}

export default NewNavBar
