import React from 'react'
import HeroPatternLeft from './hero-pattern-left'
import Counter from './hero-counter'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <div className='relative h-screen'>
            <HeroPatternLeft className='absolute top-0 -left-28' />
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center w-full h-screen px-28'>
                    <h1 className='font-semibold text-black text-8xl'>Rabithah Maahid Islamiyah</h1>
                    <h6 className='mt-3 text-2xl font-normal text-primary'>Nahdlatul Ulama Kota Malang</h6>
                    <Link href='/pesantren'>
                        <button className='mt-8 button'>
                            Portal Pesantren
                        </button>
                    </Link>
                </div>
                <div className='flex items-end justify-center h-screen'>
                    <Counter className='w-8/12 mb-20' />
                </div>
            </div>
        </div>
    )
}
