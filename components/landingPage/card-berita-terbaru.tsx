import Image from 'next/image'
import CardBeritaTerbaruPattern from './card-berita-terbaru-pattern'

export default function CardBeritaTerbaru() {
    return (
        <div className='h-full transition-all duration-200 hover:shadow-xl'>
            <div className='overflow-hidden h-2/5'>
                <div className='relative flex items-center w-full h-32'>
                    <Image
                        src="/images/beritaTerbaru.jpg"
                        alt="featuredImageBerita"
                        width={1000}
                        height={1000}
                        className='object-cover'
                    />
                </div>

            </div>
            <div className='relative flex items-center justify-center overflow-hidden h-3/5'>
                <CardBeritaTerbaruPattern />
                <div className='absolute top-0 flex flex-col h-full px-8 py-4 text-white'>
                    <p className='text-[8pt] font-normal'>26 September 2024</p>
                    <div className='grow'>
                        <h6 className='text-2xl font-semibold line-clamp-4 grow'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod fugit quos nemo itaque aperiam cum enim</h6>

                    </div>
                    <button className='text-xs font-medium transition-all duration-200 button hover:bg-white hover:text-primary'>Selengkapnya</button>
                </div>
            </div>

        </div>
    )
}
