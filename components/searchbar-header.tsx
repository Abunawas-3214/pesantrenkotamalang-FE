import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

export default function SearchbarHeader({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("shadow py-3 px-6 flex items-center", className)} {...props}>
            <p className="grow text-base opacity-50">Cari Pesantren</p>
            <Search className="w-5 h-5 text-gray-400" />
        </div>
    )
}
