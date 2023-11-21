import { FileImage } from 'lucide-react'

export default function CardShowcasePesantren() {
    return (
        <div className='flex flex-col items-center justify-between p-6 w-72 h-96 bg-slate-300'>
            <p>Pesantren Al-Hikam</p>
            <FileImage className="w-16 h-16 text-gray-400" />
            <button className=' btn btn-primary'>Detail</button>
        </div>
    )
}
