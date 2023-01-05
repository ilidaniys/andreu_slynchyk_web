import React from 'react'
import Navbar from '../navComponent/Navbar'

export interface IMenu {
    href: string;
    tittle: string;
}

const menu: IMenu[] = [
    {
        href: '/',
        tittle: 'Home',
    },
    {
        href: '/login',
        tittle: 'Login',
    },
]
export default function LinkLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar menu={menu} />
            <div className={'w-screen h-screen flex justify-center items-center'}>
                {children}
            </div>
        </div>
    )
}
