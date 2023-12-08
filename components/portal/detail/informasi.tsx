import { cn } from "@/lib/utils"
export default function Informasi({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("h-fit shadow-xl px-9 py-11 space-y-8", className)} {...props}>
            <h3 className="text-black text-2xl font-semibold">Informasi Singkat</h3>
            <div className="w-full space-y-5 text-stone-500 text-lg font-normal">
                <div className="grid grid-cols-2">
                    <h5 className="text-black text-lg font-medium">Program</h5>
                    <p>Kitab</p>
                </div>
                <div className="grid grid-cols-2">
                    <h5 className="text-black text-lg font-medium">Gender</h5>
                    <p>Putra</p>
                </div>
                <div className="grid grid-cols-2">
                    <h5 className="text-black text-lg font-medium">Tingkat</h5>
                    <p>Mahasiswa</p>
                </div>
                <div className="grid grid-cols-2">
                    <h5 className="text-black text-lg font-medium">Pendiri</h5>
                    <p>KH. Hasyim Muzadi</p>
                </div>
                <div className="grid grid-cols-2">
                    <h5 className="text-black text-lg font-medium">Pengasuh</h5>
                    <p>KH. Muh. Nafi</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="button px-6">Hubungi Admin Pesantren</button>
            </div>
        </div>
    )
}
