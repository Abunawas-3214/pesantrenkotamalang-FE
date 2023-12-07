'use client'
import { cn } from "@/lib/utils"

export default function SearchbarPesantren({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("flex items-center justify-center shadow-lg", className)} {...props}>
            <input
                type="text"
                placeholder="Cari Pesantren"
                className="search w-full h-full"
            />
            <button className="button h-full w-1/6">
                Cari
            </button>
        </div>
    )
}
