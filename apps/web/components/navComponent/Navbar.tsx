import React, { FC, useMemo } from 'react'
import { IMenu } from '../layout/LinkLayout'
import Image from 'next/image'
import BgOrange from '../../public/img/StockChart.svg'
import StandardButton from '../StandardButton'


interface INavbar {
    menu: IMenu[]
}

const Navbar: FC<INavbar> = ({ menu }) => {

    const renderMenu = useMemo(() => {
        return menu.map((link, index) => {
            return <StandardButton key={index} executor={link.executor} size={'xl'}>{link.tittle}</StandardButton>
        })
    }, [menu])

    return (
        <div className={'fixed h-32 w-full overflow-x-hidden'}>
            <div
                className={'fixed h-48 w-full overflow-hidden bg-fixed bg-center bg-cover z-10 -translate-y-36 shadow-lg shadow-gray-50 hover:shadow-[#F78764] hover:translate-y-0 transition duration-300 ease-in-out'}>
                <Image className={'-z-10'} src={BgOrange} alt={'meteor'} fill />
                {/*<Image className={'-z-10'} src={BgWhite} alt={'meteor'} fill />*/}
                <div className={'flex w-full h-full justify-around items-center'}>
                    {renderMenu}
                </div>
            </div>
        </div>
    )
}

export default Navbar
