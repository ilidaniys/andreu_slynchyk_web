import React from 'react'
import Navbar from '../navComponent/Navbar'
import { useRouter } from 'next/router'
import { IMenu } from './LinkLayout'
import Footer from '../footerComponent/Footer'


export default function DefaultLayout({ children }: {
    children: React.ReactNode;
}) {
    const router = useRouter()
    const menu: IMenu[] = [
        {
            executor: () => {
                router.replace('/gallery')
            },
            tittle: 'Gallery',
        },
        {
            executor: () => {
                router.replace('/news')
            },
            tittle: 'News',
        },
        {
            executor: () => {
                router.replace('/account')
            },
            tittle: 'Accounts',
        },
    ]

    return (
        <div>
            <Navbar menu={menu} />
            <div className={'w-full h-full pt-32'}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
