import { cn } from "@/lib/utils"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

export default function Pagination({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex items-center gap-2", className)} {...props}>
            {/* <button className="button button-primary p-2 bg-white text-primary border border-transparent hover:bg-white hover:border-primary "><ChevronsLeft /></button> */}

            <button className="button button-primary px-5">1</button>
            <button className="button button-primary px-5 text-primary bg-white hover:text-white border border-primary">2</button>
            <button className="button button-primary px-5 text-primary bg-white hover:text-white border border-primary">3</button>
            <button className="button button-primary px-5 text-primary bg-white hover:text-white border border-primary">4</button>

            <button className="button button-primary p-2 bg-white text-primary border border-transparent hover:bg-white hover:border-primary "><ChevronsRight /></button>
        </div>
    )
}
