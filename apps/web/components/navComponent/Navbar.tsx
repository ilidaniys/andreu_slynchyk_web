import React, { FC, useMemo } from 'react'
import { IMenu } from '../layout/layout'
import NavLink from './NavLink'


interface INavbar {
    menu: IMenu[]
}

const Navbar: FC<INavbar> = ({ menu }) => {


    const renderMenu = useMemo(() => {
        return menu.map((link, index) => {
            return <NavLink key={index} link={link.href}>{link.tittle}</NavLink>
        })
    }, [menu])

    return (
        <div className={`w-screen flex items-center justify-center h-14 gap-3 bg-transparent z-10 fixed`}>
            {renderMenu}
        </div>
    )
}

export default Navbar
