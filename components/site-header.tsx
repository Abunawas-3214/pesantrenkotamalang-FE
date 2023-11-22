import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

export default function Header() {
    return (
        <nav className='fixed top-0 z-10 w-full px-16 bg-white shadow-sm navbar'>
            <div className="flex-1">
                <Link href="/">
                    <Image src="/apple.svg" alt="logo" width={40} height={40} />
                </Link>
            </div>
            <div className="navbar-center">
                <div className="space-x-12">
                    <Link href="/" className="text-lg font-semibold capitalize">Beranda</Link>
                    <Link href="/pesantren" className="text-lg font-semibold capitalize">Portal</Link>
                    <Link href="/" className="text-lg font-semibold capitalize">Berita</Link>
                </div>

            </div>
            <div className="navbar-end">
                <div className="join">
                    <input type="text" className="input-bordered input join-item" />
                    <button className="bg-white btn join-item">
                        <Search />
                    </button>
                </div>
            </div>
        </nav>
    )
}
