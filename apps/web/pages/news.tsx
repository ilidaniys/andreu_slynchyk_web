import React from 'react'
import NewsPost from '../components/pageComponent/NewsPost'
import DefaultLayout from '../components/layout/DefaultLayout'

const News = () => {


    return (
        <DefaultLayout>
            <div className={'min-h-full w-full flex flex-col px-24 gap-14'}>
                <NewsPost />
                <NewsPost />
                <NewsPost />
                <NewsPost />
            </div>
        </DefaultLayout>
    )
}

export default News
