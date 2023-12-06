import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import Navbar from "./navbar-header"
import SearchbarHeader from "./searchbar-header"

export default function Header() {
    return (
        <header className='flex items-center fixed top-0 z-10 w-full px-36 shadow-sm h-24'>
            <Link href="/">
                <Image
                    src="/logo_rmi.svg"
                    alt="Logo RMI"
                    width={160}
                    height={40}
                />
            </Link>
            <Navbar className="grow" />
            <SearchbarHeader className="w-80 h-14" />
        </header>
    )
}
