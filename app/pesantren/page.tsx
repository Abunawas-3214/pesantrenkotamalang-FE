import CardPesantren from '@/components/portal/card-pesantren'
import FilterPesantren from '@/components/portal/filter-pesantren'
import Pagination from '@/components/ui/pagination'
import SearchbarPesantren from '@/components/ui/searchbar-pesantren'
import React from 'react'

const PortalPesantren = () => {
    return (
        <main className='pt-24 pb-32 space-y-8'>
            <div>
                <div className='flex justify-center w-full py-12'>
                    <SearchbarPesantren className='w-1/2 h-16' />
                </div>
                <div className='grid grid-cols-4 gap-10 mt-12'>
                    <FilterPesantren className='sticky hidden w-full lg:block top-28 h-fit' />
                    <div className='col-span-3 '>
                        <div className='flex flex-wrap justify-between gap-8 w-full'>
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
            </div>
            <div className='flex justify-end mt-8'>
                <Pagination />
            </div>

        </main>
    )
}

export default PortalPesantren