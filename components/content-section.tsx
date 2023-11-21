import React from 'react'
import SiteCounter from './counter'
import SuggestionPesantren from './suggestion-pesantren'
import Partner from './partner'
import LatestNews from './latest-news'

export default function Content() {
    return (
        <div className='space-y-16 py-28'>
            <SiteCounter className='mx-28' />
            <SuggestionPesantren />
            <Partner />
            <LatestNews />
        </div>
    )
}
