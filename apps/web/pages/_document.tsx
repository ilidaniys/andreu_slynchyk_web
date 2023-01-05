import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
    // @ts-ignore
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <head>
                        <link rel='preconnect' href='https://fonts.googleapis.com' />
                        <link rel='preconnect' href='https://fonts.gstatic.com' />
                        <link href='https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap'
                              rel='stylesheet' />
                    </head>
                </Head>
                <body className={'bg-gray-800'}>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
