import Image from 'next/image'

export default function FooterPattern() {
    return (
        <div className='grid grid-cols-3'>
            <Image
                src="/patterns/Pattern7.svg"
                alt="pattern"
                width={240}
                height={240}
                className='col-start-2 w-full h-32'
            />
            <Image
                src="/patterns/Pattern1.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src="/patterns/Pattern6.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src="/patterns/Pattern8.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src="/patterns/Pattern3.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src="/patterns/Pattern5.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src="/patterns/Pattern2.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
            <Image
                src="/patterns/Pattern4.svg"
                alt="pattern"
                width={240}
                height={240}
                className='w-full h-32'
            />
        </div>
    )
}
