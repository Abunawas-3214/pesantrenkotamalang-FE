import { cn } from "@/lib/utils"

export default function FilterPesantren({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("px-12 py-8 shadow-xl text-stone-500 text-lg font-medium space-y-8", className)} {...props}>
            <div className="space-y-4">
                <h4 className='font-bold text-black'>Gender</h4>
                <div className="space-y-2">
                    <div className='space-x-2'>
                        <input type="checkbox" />
                        <label htmlFor="">Putra</label>
                    </div>
                    <div className='space-x-2'>
                        <input type="checkbox" />
                        <label htmlFor="">Putri</label>
                    </div>
                </div>

            </div>
            <div>
                <h4 className='font-bold'>Program</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Tahfidz</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Kitab</label>
                </div>
            </div>
            <div>
                <h4 className='font-bold'>Tingkat</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Mahasiswa</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Umum</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">SLTA</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">SLTP</label>
                </div>
            </div>
            <div>
                <h4 className='font-bold'>Lokasi</h4>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Lowokwaru</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Blimbing</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Keudngkandang</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Klojen</label>
                </div>
                <div className='space-x-2'>
                    <input type="checkbox" />
                    <label htmlFor="">Sukun</label>
                </div>
            </div>

        </div>
    )
}
