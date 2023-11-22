import React from 'react'

export default function Filter() {
    return (
        <div className='w-48 px-4 py-8 space-y-8 border border-gray-300'>
            <div>
                <h4 className='font-bold'>Gender</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Putra</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Putri</label>
                </div>
            </div>
            <div>
                <h4 className='font-bold'>Program</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Tahfidz</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Kitab</label>
                </div>
            </div>
            <div>
                <h4 className='font-bold'>Tingkat</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Mahasiswa</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Umum</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">SLTA</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">SLTP</label>
                </div>
            </div>
            <div>
                <h4 className='font-bold'>Lokasi</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Lowokwaru</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Blimbing</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Keudngkandang</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Klojen</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Sukun</label>
                </div>
            </div>

        </div>
    )
}
