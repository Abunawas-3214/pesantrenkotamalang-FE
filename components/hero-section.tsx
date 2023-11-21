import React from 'react'
import { FileImage } from 'lucide-react'

export default function Hero() {
    return (
        <div className='grid w-full h-screen grid-cols-2 gap-16 mt-4'>
            <div className="flex items-center ">
                <div className="space-y-8">
                    <div className="font-bold text-8xl">Rabithah Ma&apos;ahid Islamiyah</div>
                    <div className="text-lg font-medium">Nahdlatul Ulama Kota Malang</div>
                    <button className='px-12 btn btn-primary'>Portal Pesantren</button>
                </div>
            </div>
            <div className="flex items-center justify-center bg-slate-300">
                <FileImage className="w-24 h-24 text-gray-400" />
            </div>
        </div>
    )
}
