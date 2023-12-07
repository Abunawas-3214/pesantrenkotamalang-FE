"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Navbar from "./navbar-header"
import SearchbarHeader from "./searchbar-header"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
        return () => {
            window.removeEventListener("scroll", changeBackground)
        }
    }, [])

    return (
        <header className={`flex items-center fixed top-0 z-10 w-full px-36 h-24 ${isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"} transtition-all duration-200 ease-in`}>
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
