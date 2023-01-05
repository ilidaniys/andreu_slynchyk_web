import React, { FC } from 'react'
import Link from 'next/link'

interface INavLink {
    link: string,
    children: React.ReactNode
}

const NavLink: FC<INavLink> = ({ link, children }) => {
    return (
        <div className={'px-3 font-bold text-xl text-gray-50 hover:text-gray-400'}>
            <Link href={link}>
                {children}
            </Link>
        </div>
    )
}

export default NavLink
