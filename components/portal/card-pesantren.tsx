import { FileImage, MapPin, Users, Star, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CardPesantren() {
    return (
        <div className='w-56 border border-gray-300 h-fit'>
            <div className='flex items-center justify-center bg-gray-300 h-36'>
                <FileImage className="w-10 h-10 text-gray-400" />
            </div>
            <div className="flex flex-col gap-8 p-4 h-fit">
                <div className="flex items-center justify-start gap-2">
                    <Image src="/apple.svg" alt="logo" width={24} height={24} />
                    <h4 className="font-bold">Pesantren Al-Hikam</h4>
                </div>
                <div className="grid items-center grid-cols-6 grow">

                    <MapPin className="w-4 h-4 text-black" />
                    <p className="col-span-5 line-clamp-2">Jl. Jengger Ayam No. 25, Lowokwaru, Kota Malang</p>
                    <Users className="w-4 h-4 text-black" />
                    <p className="col-span-5">Putra</p>
                    <Star className="w-4 h-4 text-black" />
                    <p className="col-span-5">Kitab, Tahfidz</p>
                </div>
                <div className="flex justify-between align-bottom">
                    <button className="flex items-center justify-center w-8 h-8 border border-gray-300">
                        <Share2 className="w-4 h-4 text-gray-400" />
                    </button>
                    <Link href="/pesantren/al-hikam">
                        <button className="h-8 px-2 text-white rounded-md w-fit bg-primary">
                            Detail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
