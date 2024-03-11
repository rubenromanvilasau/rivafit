import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

type Props = {
    name: string;
    instagram: string;
    tiktok: string;
    image: string;
    discipline: string;
};

const TrainerCard = ({ name, instagram, tiktok, image, discipline }: Props) => {
    return (
        <div className="rounded-lg relative w-96 h-64 bg-black">
            <Image
                src={image}
                className="rounded-md grayscale object-contain"
                alt="Trainer"
                width={200}
                height={200}
                style={{ width: '100%', height: '200px'}}
            />
            <span className="text-purple-700 text-2xl uppercase font-bold absolute bottom-8 left-4 tracking-wide">{ name }</span>
            <span className="text-white text-xl uppercase font-bold absolute bottom-2 left-4">{ discipline}</span>
            <div className="flex items-center absolute right-4 bottom-2 gap-2">
                <Link href={tiktok} rel="noopener noreferrer" target="_blank">
                    <FaTiktok className="text-xl text-white hover:text-purple-300 transition-all ease-out duration-300"/>
                </Link>
                <Link href={instagram} rel="noopener noreferrer" target="_blank">
                    <FaInstagram className="text-xl text-white hover:text-purple-300 transition-all ease-out duration-300"/>
                </Link>
            </div>
        </div>
    )
}

export default TrainerCard;