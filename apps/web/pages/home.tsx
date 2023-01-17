import React from 'react'
import StandardButton from '../components/StandardButton'

const Home = () => {

    const buttonHandler = () => {
        return null
    }
    return (
        <div>
            <div className={'flex justify-around p-5'}>
                <StandardButton executor={buttonHandler} size={'l'}> Gallery</StandardButton>
                <StandardButton executor={buttonHandler} size={'l'}> News </StandardButton>
                <StandardButton executor={buttonHandler} size={'l'}> Account </StandardButton>
            </div>
        </div>
    )
}

export default Home
