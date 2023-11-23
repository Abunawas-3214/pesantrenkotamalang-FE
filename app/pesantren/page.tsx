import CardPesantren from '@/components/portal/card-pesantren'
import Filter from '@/components/portal/filter-controll'
import React from 'react'

const PesantrenPage = () => {
    return (
        <div className='pt-12'>
            <div className='flex justify-center w-full join'>
                <input type="text" className="w-1/2 input-bordered input join-item" placeholder='Cari Pesantren' />
                <button className="btn btn-primary join-item">
                    Cari
                </button>
            </div>
            <div className='mt-12 flex gap-20'>
                <Filter />
                <div className='flex flex-wrap w-5/6 gap-8'>
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                </div>
            </div>
        </div>
    )
}

export default PesantrenPage