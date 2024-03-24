'use client'
import { tabs } from "@/lib/constants";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const pathname = usePathname();

    return (
        <footer className="w-full bg-black border-t-2 border-primary p-4 flex justify-between items-center">
            <Image
                src={"/logo.png"}
                alt="Rivanex"
                width={100}
                height={100}
            />
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                    <Link href={'https://www.facebok.com'} rel="noopener noreferrer" target="_blank">
                        <FaFacebook className="text-2xl text-white cursor-pointer hover:text-primary transition-all ease-in duration-300"/>
                    </Link>
                    <Link href={'https://www.instagram.com'} rel="noopener noreferrer" target="_blank">
                        <FaInstagram className="text-2xl text-white cursor-pointer hover:text-primary transition-all ease-in duration-300"/>
                    </Link>
                    <Link href={'https://www.tiktok.com'} rel="noopener noreferrer" target="_blank">
                        <FaTiktok className="text-2xl text-white cursor-pointer hover:text-primary transition-all ease-in duration-300"/>
                    </Link>
                    <Link  href={'https://www.twitter.com'} rel="noopener noreferrer" target="_blank">
                        <FaTwitter className="text-2xl text-white cursor-pointer hover:text-primary transition-all ease-in duration-300"/>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={'https://wa.me/56989209062'} rel="noopener noreferrer" target="_blank">
                        <FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-primary transition-all ease-in duration-300"/>
                    </Link>
                    <Link href={'https://wa.me/56989209062'} rel="noopener noreferrer" target="_blank">
                        <span className="underline underline-offset-2 text-white" title="Abrir whatsapp">+56 9 1234 5678</span>
                    </Link>
                </div>
                <small className="text-slate-500">©Rivanex, {new Date().getFullYear()}</small>
            </div>
            <ul>
                { tabs.map( tab => (
                    <Link href={tab.href} key={tab.name}>
                        <li 
                            className={`${pathname === tab.href && 'underline'} text-sm text-white cursor-pointer underline-offset-2 hover:text-primary capitalize`}
                        >
                            { tab.name }
                        </li>
                    </Link>
                ))}
            </ul>

        </footer>
    )
}

export default Footer