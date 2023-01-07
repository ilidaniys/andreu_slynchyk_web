import { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import '../assets/style/global.css'
import { SessionProvider } from 'next-auth/react'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    session: any,
    Component: NextPageWithLayout
}
export default function MyApp({ session, Component, pageProps }: AppPropsWithLayout) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}
