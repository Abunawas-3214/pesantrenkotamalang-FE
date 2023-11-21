import { FileImage } from 'lucide-react'


export default function CardNews() {
    return (
        <div className='flex w-full h-48 border border-gray-400'>
            <div className='flex items-center justify-center min-w-40 bg-slate-300'>
                <FileImage className="w-12 h-12 text-gray-400" />
            </div>
            <div className='flex flex-col p-4'>
                <h4 className='font-bold'>What is Lorem Ipsum?</h4>
                <p className='line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <button className='btn btn-primary'>Detail</button> */}
            </div>
        </div>
    )
}
