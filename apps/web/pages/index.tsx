import React from 'react'
import Image from 'next/image'
import panorama from '../public/img/panorma.jpeg'
import Link from 'next/link'


const Index = () => {
    return (
        <div>
            <div className='flex items-center h-screen bg-fixed bg-center bg-cover'>
                <Image alt={'/'} src={panorama} fill />
                <div className={'absolute w-screen h-screen bg-black/60'} />
                <div
                    className={'flex flex-col lg:ml-[140px] lg:mb-[140px] 2lg:ml-[360px] 2lg:mb-[360px] gap-[20px] z-30 text-gray-50'}>
                    <h1 className={'lg:text-7xl 2lg:text-9xl'}>Welcome to travel blog</h1>
                    <h1 className={'lg:text-5xl 2lg:text-8xl'}>Let's search all world</h1>
                    <button
                        className={'text-6xl border lg:w-2/5 2lg:w-1/3 p-2 hover:bg-gray-400 hover:text-gray-800 transition-all delay-250'}
                    >
                        <Link href={'/login'}>
                            Join now
                        </Link>
                    </button>
                    {/*<button*/}
                    {/*    className={'text-6xl border lg:w-2/5 2lg:w-1/3 p-2 hover:animate-fills'}*/}
                    {/*>*/}
                    {/*    <Link href={'/login'}>*/}
                    {/*        Join now*/}
                    {/*    </Link>*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Index
