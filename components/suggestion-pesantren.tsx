import React from 'react'
import CardShowcasePesantren from './card-showcase-pesantren'

export default function SuggestionPesantren() {
    return (
        <div className='text-center'>
            <h2 className='text-xl font-bold'>Daftar Pesantren</h2>
            <p>Berikut beberapa daftar pesantren di Kota Malang</p>
            <div className='flex flex-wrap justify-center gap-8 mt-12'>
                <CardShowcasePesantren />
                <CardShowcasePesantren />
                <CardShowcasePesantren />
                <CardShowcasePesantren />
            </div>
        </div>
    )
}
