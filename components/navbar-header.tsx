import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <nav className="flex gap-8 text-lg font-normal items-center justify-center">
                <Link href="/" className="font-medium">
                    Beranda
                </Link>
                <Link href="/pesantren" className="">
                    Portal
                </Link>
                <Link href="/berita" className="">
                    Berita
                </Link>
            </nav>
        </div>

    )
}
