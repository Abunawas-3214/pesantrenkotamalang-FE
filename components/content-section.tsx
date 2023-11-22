import React from 'react'
import SiteCounter from './counter'
import SuggestionPesantren from './suggestion-pesantren'
import Partner from './partner'
import LatestNews from './latest-news'

export default function Content() {
    return (
        <div className='space-y-16 mt-28'>
            <div className='join w-full  flex justify-center'>
                <input type="text" className="input-bordered input join-item w-1/2" placeholder='Cari Pesantren' />
                <button className="btn btn-primary join-item">
                    Cari
                </button>
            </div>
            <SiteCounter className='mx-28' />
            <SuggestionPesantren />
            <Partner />
            <LatestNews />
        </div>
    )
}
