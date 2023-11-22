import { FileImage } from 'lucide-react'


export default function CardNews() {
    return (
        <div className='grid grid-cols-4 w-full h-48 border border-gray-400'>
            <div className='flex items-center justify-center bg-slate-300'>
                <FileImage className="w-12 h-12 text-gray-400" />
            </div>
            <div className='relative p-4 col-start-2 col-span-3 '>
                <h4 className='font-bold'>What is Lorem Ipsum?</h4>
                <p className='line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='btn btn-primary absolute right-4 bottom-4'>Detail</button>
            </div>
        </div>
    )
}
