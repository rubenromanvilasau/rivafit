'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { tabs } from "../../lib/constants"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="bg-black flex justify-between py-2 px-4 items-center border-purple-400 border-b-2 sticky top-0 z-50">
            <div className="flex items-center">
                <GiHamburgerMenu className="text-white text-4xl cursor-pointer md:hidden"/>
                <Link href={'/'}>
                    <Image
                        alt="Logo"
                        height={80}
                        width={80}
                        src={"/logo.png"}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
            <ul className="gap-4 hidden md:flex">
                { tabs.map( tab => (
                    <Link 
                        key={tab.href}
                        href={tab.href}
                    >
                        <li className={`${pathname === tab.href && 'text-purple-80 underline underline-offset-2'} text-white text-xl font-bold hover:underline cursor-pointer capitalize`}>
                            {tab.name}
                        </li>
                    </Link>
                ))}
            </ul>

            <Link href={'/inscripcion'}>
                <button className="bg-purple-700 tracking-widest rounded-full h-11 p-4 flex items-center uppercase font-bold hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-800 transition-all ease-in duration-300">
                    Unirme
                </button>
            </Link>
        </div>
    )
}

export default Navbar