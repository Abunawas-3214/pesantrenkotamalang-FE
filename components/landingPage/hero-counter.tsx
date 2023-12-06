import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Counter({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("h-32 grid grid-cols-2", className)} {...props}>
            <div className="relative flex items-center justify-center h-full overflow-y-hidden">
                <Image
                    src="/patterns/Pattern7.svg"
                    alt="pattern"
                    width={300}
                    height={300}
                />
                <div className="absolute flex flex-col items-center justify-center w-full h-full space-y-2 text-white center">
                    <p className="text-lg font-normal">Jumlah Pesantren</p>
                    <h5 className="text-3xl font-semibold">30</h5>
                </div>
            </div>
            <div className="relative flex items-center justify-center h-full overflow-y-hidden">
                <Image
                    src="/patterns/Pattern8.svg"
                    alt="pattern"
                    width={300}
                    height={300}
                />
                <div className="absolute flex flex-col items-center justify-center w-full h-full space-y-2 text-white center">
                    <p className="text-lg font-normal">Jumlah Santri</p>
                    <h5 className="text-3xl font-semibold">15K</h5>
                </div>
            </div>


        </div>
    )
}
