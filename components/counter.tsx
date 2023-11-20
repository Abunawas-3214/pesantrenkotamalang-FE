import React from 'react'

export default function SiteCounter({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={'grid grid-cols-2 py-8 border border-gray-400 place-items-center ' + className} {...props}>
            <div className='text-center'>
                <p>Jumlah Pesantren</p>
                <h3 className='text-3xl font-bold'>50</h3>
            </div>
            <div className='text-center'>
                <p>Jumlah Santri</p>
                <h3 className='text-3xl font-bold'>15.000</h3>
            </div>
        </div>
    )
}
