import Image from "next/image";
import FooterPattern from "./site-footer-pattern";


export default function Footer() {
    return (
        <footer className="relative h-96 verflow-hidden flex items-center justify-center">
            <Image
                src="/images/footerImage.jpg"
                alt="footer_image"
                width={2000}
                height={2000}
                className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full flex flex-col justify-center gap-4 px-28 bg-white/90">
                <div className="flex gap-10 justify-center h-24 w-fit">
                    <Image
                        src="/logo_nu.svg"
                        alt="footer_image"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                    <Image
                        src="/logo_rmi.svg"
                        alt="footer_image"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-stone-500 text-lg font-normal">
                    <h3 className="text-black text-2xl font-bold">Rabithah Maahid Islamiyah</h3>
                    <p>Nahdlatul Ulama Kota Malang</p>
                    <p>Jl. K.H. Hasyim Ashari No.21, Kauman, Kec. Klojen,<br /> Kota Malang, Jawa Timur, 65119</p>
                </div>
                <p className="text-sm">Copyright © 2024. All rights reserved.</p>
            </div>
            <div className="absolute top-0 right-0 w-fit h-full">
                <FooterPattern />
            </div>
        </footer>
    )
}
