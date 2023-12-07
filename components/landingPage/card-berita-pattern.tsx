import Image from 'next/image'

export default function CardBeritaPatter() {
    return (
        <div className='grid grid-cols-3'>
            <Image
                src="/patterns/Pattern4.svg"
                alt="pattern"
                width={160}
                height={160}
            />
            <Image
                src="/patterns/Pattern2.svg"
                alt="pattern"
                width={160}
                height={160}
            />
            <Image
                src="/patterns/Pattern1.svg"
                alt="pattern"
                width={160}
                height={160}
            />
            <Image
                src="/patterns/Pattern6.svg"
                alt="pattern"
                width={160}
                height={160}
            />
            <Image
                src="/patterns/Pattern7.svg"
                alt="pattern"
                width={160}
                height={160}
            />
            <Image
                src="/patterns/Pattern3.svg"
                alt="pattern"
                width={160}
                height={160}
            />
        </div>
    )
}
