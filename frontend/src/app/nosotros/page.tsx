import Image from "next/image"
import Link from "next/link";
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const NosotrosPage = () => {

    return (
        <div className="container mx-auto p-4 md:mb-32">
            <h1 className="text-4xl font-bold uppercase mt-4">Nuestros entrenadores</h1>

            <div className="flex items-center flex-wrap mt-8 gap-4">

                <div className="rounded-lg relative w-96 h-64 bg-black">
                    <Image
                        src={'/images/girl-trainer.jpg'}
                        className="rounded-md grayscale object-contain"
                        alt="Trainer"
                        width={200}
                        height={200}
                        style={{ width: '100%', height: '200px'}}
                    />
                    <span className="text-purple-700 text-2xl uppercase font-bold absolute bottom-8 left-4 tracking-wide">Julia</span>
                    <span className="text-white text-xl uppercase font-bold absolute bottom-2 left-4">Pilates</span>
                    <div className="flex items-center absolute right-4 bottom-2 gap-2">
                        <Link href={'https://www.tiktok.com/'} rel="noopener noreferrer" target="_blank">
                            <FaTiktok className="text-xl text-white hover:text-purple-300 transition-all ease-out duration-300"/>
                        </Link>
                        <Link href={'https://www.instagram.com/'} rel="noopener noreferrer" target="_blank">
                            <FaInstagram className="text-xl text-white hover:text-purple-300 transition-all ease-out duration-300"/>
                        </Link>
                    </div>
                </div>

                <div className="rounded-lg relative w-96 h-64 bg-black">
                    <Image
                        src={'/images/man-trainer.jpg'}
                        className="rounded-md grayscale object-contain"
                        alt="Trainer"
                        width={200}
                        height={200}
                        style={{ width: '100%', height: '200px'}}
                    />
                    <span className="text-purple-700 text-2xl uppercase font-bold absolute bottom-8 left-4 tracking-wide">Carlos</span>
                    <span className="text-white text-xl uppercase font-bold absolute bottom-2 left-4">Kickboxing</span>
                    <div className="flex items-center absolute right-4 bottom-2 gap-2">
                        <Link href={'https://www.tiktok.com/'} rel="noopener noreferrer" target="_blank">
                            <FaTiktok className="text-xl text-white hover:text-purple-300 transition-all ease-out duration-300"/>
                        </Link>
                        <Link href={'https://www.instagram.com/'} rel="noopener noreferrer" target="_blank">
                            <FaInstagram className="text-xl text-white hover:text-purple-300 transition-all ease-out duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosotrosPage;