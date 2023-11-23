import { FileImage } from "lucide-react"
import { MapPin, Users, Star, Share2 } from "lucide-react"
import Image from "next/image"

export default function CardPesantren() {
    return (
        <div className='h-fit w-56 border border-gray-300'>
            <div className='h-36 bg-gray-300 flex items-center justify-center'>
                <FileImage className="w-10 h-10 text-gray-400" />
            </div>
            <div className="p-4 flex flex-col gap-8 h-fit">
                <div className="flex justify-start items-center gap-2">
                    <Image src="/apple.svg" alt="logo" width={24} height={24} />
                    <h4 className="font-bold">Pesantren Al-Hikam</h4>
                </div>
                <div className="grow">
                    <p className="line-clamp-2">Jl. Jengger Ayam No. 25, Lowokwaru, Kota Malang</p>
                    <p>Putra</p>
                    <p>Kitab</p>
                </div>
                <div className="flex justify-between align-bottom">
                    <button className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                        <Share2 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-fit h-8 px-2 rounded-md text-white bg-primary">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    )
}
