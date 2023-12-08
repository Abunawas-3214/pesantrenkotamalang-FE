import Informasi from '@/components/portal/detail/informasi'
import Image from 'next/image'
import React from 'react'

const DetailPesantren = () => {
    return (
        <main className='grid grid-cols-7 gap-10 pt-36 pb-32'>
            <div className='col-span-5 h-fit w-full py-6 px-9 border border-gray-300 space-y-8'>
                <div className='w-full h-24 flex items-center justify-start gap-7'>
                    <div className='h-full w-fit'>
                        <Image
                            src={"/pesantren/alhikam/alhikam-logo.png"}
                            alt="logoPesantren"
                            height={500}
                            width={500}
                            className='w-fit h-full object-cover'
                        />
                    </div>
                    <div className='h-fit w-full'>
                        <h2 className='text-black text-2xl font-semibold'>Pesantren Mahasiswa Al-Hikam</h2>
                        <h3 className='text-stone-500 text-lg font-normal'>Jalan Cengger Ayam No.25, Lowokwaru</h3>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='bg-gray-300 h-[500px] w-full'>

                    </div>
                    <div className='flex gap-4'>
                        <div className='bg-gray-300 h-56 w-full'></div>
                        <div className='bg-gray-300 h-56 w-full'></div>
                        <div className='bg-gray-300 h-56 w-full'></div>
                    </div>
                </div>

                <div className=''>
                    <h2 className='font-bold text-xl mb-2'>What is Lorem Ipsum?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium aut placeat magnam aliquid debitis at, pariatur maxime dignissimos, nihil optio laudantium! Veritatis doloremque perferendis inventore impedit perspiciatis consequatur a!
                        Eos nisi voluptatem ut non illum impedit tempore. Velit corporis cupiditate quis aut necessitatibus totam! Optio repellendus assumenda quos fugit tempora iure, qui adipisci, amet natus eveniet nulla consectetur eum.
                        Quis, facilis qui, placeat vitae blanditiis recusandae debitis magni labore eaque earum fugit reiciendis explicabo dolores odio sunt laboriosam nesciunt ducimus sed impedit est. Aspernatur autem provident est repellat aperiam?
                        Soluta cumque aperiam esse debitis reprehenderit dolores praesentium eligendi tempora aliquid sequi quaerat, voluptate eaque id porro quis, et eum sapiente. A voluptatibus fuga delectus, libero error fugiat ut id!
                        Repudiandae reiciendis nesciunt autem, eligendi fugit, nihil aliquid laudantium debitis similique veritatis voluptas expedita saepe nostrum. Voluptatibus facilis numquam mollitia eligendi reprehenderit, vel cumque iste architecto obcaecati, aliquam sapiente ratione.
                        Amet fugiat nam velit, voluptatem neque magnam molestias laboriosam pariatur libero eveniet fuga numquam a, esse sit sapiente nisi facilis tempore alias odit omnis voluptatibus ratione? Excepturi unde totam aliquid.
                        Eos maiores et iste incidunt fugiat rerum odio est dignissimos quaerat necessitatibus nihil debitis quas nemo, ducimus fuga asperiores. Saepe facere consectetur cupiditate dicta distinctio? Ipsam eum esse eligendi non.
                        Dolor, beatae enim. Aliquam iure eaque neque optio magnam dolor accusamus blanditiis, sunt ipsa, ipsam aliquid officiis sed eligendi suscipit quo earum ad! Inventore, debitis voluptate! Voluptate nemo illum quia?
                        Quas dicta porro illo repudiandae impedit eius. Quis, distinctio placeat quae facilis ab esse eaque obcaecati fugit consequatur, neque sunt cumque sint vero architecto, dolore omnis cum blanditiis porro labore!
                        Nulla tempora temporibus quidem necessitatibus quasi. Provident cum, architecto consequatur facilis dolorem fugiat veniam doloribus quod veritatis nemo ut fugit repellat optio magni odit iusto voluptates iste omnis laudantium repellendus.
                    </p>
                    <h2 className='font-bold text-xl mt-12'>Media Pesantren</h2>
                </div>
            </div>
            <Informasi className='col-span-2 sticky top-28' />
        </main>
    )
}

export default DetailPesantren