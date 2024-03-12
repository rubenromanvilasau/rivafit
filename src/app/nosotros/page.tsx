import Image from "next/image"
import Link from "next/link";
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import TrainerCard from "../../components/TrainerCard";

const NosotrosPage = () => {

    return (
        <div className="container mx-auto p-4 md:mb-32">
            <h1 className="text-4xl font-bold uppercase mt-4">Nuestros entrenadores</h1>

            <div className="flex items-center justify-center md:justify-normal flex-wrap mt-8 gap-4">
                <TrainerCard
                    name="Carlos"
                    instagram="https://www.instagram.com/"
                    tiktok="https://www.tiktok.com/"
                    image="/images/man-trainer.jpg"
                    discipline="Kickboxing"
                />

                <TrainerCard
                    name="Julia"
                    instagram="https://www.instagram.com/"
                    tiktok="https://www.tiktok.com/"
                    image="/images/girl-trainer.jpg"
                    discipline="Pilates"
                />

            </div>
        </div>
    )
}

export default NosotrosPage;