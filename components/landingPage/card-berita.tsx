import React from 'react'
import CardBeritaPatter from './card-berita-pattern'
import Image from 'next/image'

export default function CardBerita() {
    return (
        <div className='w-full transition-all duration-200 h-80 hover:shadow-xl'>
            <div className='flex items-center w-full overflow-hidden h-1/2'>
                <Image
                    src="/images/berita.jpg"
                    alt="featuredImageBerita"
                    width={1000}
                    height={1000}
                    className='object-cover'
                />
            </div>
            <div className='relative flex items-center w-full overflow-hidden h-1/2'>
                <CardBeritaPatter />
                <div className='absolute top-0 flex flex-col h-full px-8 py-4 text-white'>
                    <p className='text-[8pt] font-normal'>26 September 2024</p>
                    <div className='grow'>
                        <h6 className='text-lg font-medium line-clamp-2 grow'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                    </div>
                    <button className='text-xs font-medium transition-all duration-200 button hover:bg-white hover:text-primary'>Selengkapnya</button>
                </div>
            </div>
        </div >
    )
}
