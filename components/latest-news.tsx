import React from 'react'
import CardNews from './card-news'

export default function LatestNews() {
    return (
        <div>
            <h2 className='text-xl font-bold'>Berita</h2>
            <p>Update Terkini</p>
            <div className='grid gap-8 mt-8 lg:grid-cols-2 md:grid-cols-1'>
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
            </div>
        </div>
    )
}
