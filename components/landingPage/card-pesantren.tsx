import Image from 'next/image'
import React from 'react'

export default function CardPesantren() {
    return (
        <div className='relative h-[448px]  w-full max-w-[368px] group bg-green-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-200'>
            <div className='h-full overflow-hidden bg-gray-700'>
                <Image
                    src="/images/alhikam.jpg"
                    alt="pesantren"
                    height={2000}
                    width={2000}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='absolute top-0 flex flex-col items-center justify-between p-6 h-full w-full bg-gradient-to-b from-black/70 to-black/10 group-hover:from-black/50'>
                <div className='text-center text-white'>
                    <h6 className='text-2xl font-semibold'>Al-Hikam</h6>
                    <p className='text-lg font-normal'>Lowokwaru</p>
                </div>
                <button className='button'>
                    Detail
                </button>
            </div>

        </div>
    )
}
