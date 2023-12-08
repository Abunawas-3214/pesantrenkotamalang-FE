import { Book, MapPin, User, Star, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CardPesantrenPatter from "./card-pesantren-pattern"

export default function CardPesantren() {
    return (
        <div className='relative h-[448px] w-full max-w-[288px] hover:-translate-y-1 hover:shadow-2xl transition-all duration-200'>
            <div className="relative h-3/5 w-full overflow-hidden">
                <Image
                    src="/images/alhikam.jpg"
                    alt="pesantren"
                    height={2000}
                    width={2000}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/60 to-black/10 p-6 " >
                    <div className='text-center text-white'>
                        <h6 className='text-2xl font-semibold'>Al-Hikam</h6>
                        <p className='text-lg font-normal'>Lowokwaru</p>
                    </div>
                </div>
            </div>
            <div className="relative h-2/5 w-full bg-green-300 overflow-hidden">
                <CardPesantrenPatter />
                <div className='absolute top-0 flex flex-col justify-between py-6 px-5 h-full w-full'>
                    <div className="text-white text-lg font-normal">
                        <div className="block">
                            <MapPin className="inline mr-2" />
                            <p className="inline">Lowokwaru</p>
                        </div>
                        <div className="block">
                            <User className="inline mr-2" />
                            <p className="inline">Putra</p>
                        </div>
                        <div className="block">
                            <Book className="inline mr-2" />
                            <p className="inline">Kitab</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href="/pesantren/alhikam">
                            <button className="button hover:bg-white hover:text-primary">
                                Detail
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
