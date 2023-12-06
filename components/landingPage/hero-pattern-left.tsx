import Image from "next/image"
import { cn } from "@/lib/utils"

export default function HeroPatternLeft({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("h-full w-fit", className)} {...props}>
            <Image
                src="/patterns/Pattern1.svg"
                alt="pattern1"
                width={120}
                height={120}
                className="h-[calc(100%/7)] w-fit"
            />
            <Image
                src="/patterns/Pattern2.svg"
                alt="pattern2"
                width={120}
                height={120}
                className="h-[calc(100%/7)] w-fit"
            />
            <Image
                src="/patterns/Pattern3.svg"
                alt="pattern3"
                width={120}
                height={120}
                className="h-[calc(100%/7)] w-fit"
            />
            <Image
                src="/patterns/Pattern4.svg"
                alt="pattern4"
                width={120}
                height={120}
                className="h-[calc(100%/7)] w-fit"
            />
            <Image
                src="/patterns/Pattern5.svg"
                alt="pattern5"
                width={120}
                height={120}
                className="h-[calc(100%/7)] w-fit"
            />
            <Image
                src="/patterns/Pattern6.svg"
                alt="pattern6"
                width={120}
                height={120}
                className="h-[calc(100%/7)] w-fit"
            />
            <div className="flex h-[calc(100%/7)]">
                <Image
                    src="/patterns/Pattern7.svg"
                    alt="pattern7"
                    width={120}
                    height={120}
                    className="w-fit"
                />
                <Image
                    src="/patterns/Pattern8.svg"
                    alt="pattern8"
                    width={120}
                    height={120}
                    className="w-fit"
                />
            </div>
        </div>
    )
}
