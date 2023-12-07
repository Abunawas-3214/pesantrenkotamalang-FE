import React from 'react'
import SearchbarPesantren from '../ui/searchbar-pesantren'
import CardPesantren from './card-pesantren'
import CardBerita from './card-berita'
import CardBeritaTerbaru from './card-berita-terbaru'

export default function ContentSection() {
    return (
        <div className='py-32 space-y-24'>
            <div className='flex items-center justify-center'>
                <SearchbarPesantren className='w-3/5 h-16 bg-amber-200' />
            </div>
            <div className='text-center'>
                <h4 className='mb-2 text-2xl font-semibold text-black'>Daftar <span className='text-primary'>Pesantren</span></h4>
                <h5 className='text-lg font-normal text-stone-500'>Berikut Beberapa Daftar Pesantren di Kota Malang</h5>
                <div className='flex justify-between mt-8 gap-8'>
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                    <CardPesantren />
                </div>
            </div>
            <div className='grid grid-cols-10'>
                <div className='flex flex-col items-start justify-center h-32 col-span-2'>
                    <h4 className='mb-2 text-2xl font-semibold text-black'>Partner <span className='text-primary'>Kami</span></h4>
                    <h5 className='text-lg font-normal text-stone-500'>Kami Telah Bekerja Sama Dengan Beberapa Instansi</h5>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col items-start justify-center h-32 col-span-2'>
                    <h4 className='mb-2 text-2xl font-semibold text-black'>Berita <span className='text-primary'>Terkini</span></h4>
                    <h5 className='text-lg font-normal text-stone-500'>Update Terkini</h5>
                </div>
                <div className='grid grid-cols-3 mt-8 gap-x-8'>
                    <div className='bg-red-200'>
                        <CardBeritaTerbaru />
                    </div>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                            <CardBerita />
                            <CardBerita />
                            <CardBerita />
                            <CardBerita />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='mt-8 button'>Lihat Semua Berita</button>
                </div>
            </div>
        </div>
    )
}
