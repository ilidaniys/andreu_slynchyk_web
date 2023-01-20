import React from 'react'
import Navbar from '../navComponent/Navbar'
import { useRouter } from 'next/router'

export interface IMenu {
    executor: () => void;
    tittle: string;
}


export default function LinkLayout({ children }: {
    children: React.ReactNode;
}) {
    const router = useRouter()
    const menu: IMenu[] = [
        {
            executor: () => {
                router.replace('/')
            },
            tittle: 'Home',
        },
        {
            executor: () => {
                router.replace('/login')
            },
            tittle: 'Login',
        },
    ]

    return (
        <>
            <Navbar menu={menu} />
            <div className={'w-screen h-screen flex justify-center items-center'}>
                {children}
            </div>
        </>
    )
}
