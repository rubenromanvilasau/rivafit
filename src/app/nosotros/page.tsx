import Image from "next/image"
import Link from "next/link";
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import TrainerCard from "../../components/TrainerCard";
import { machines, trainers } from "@/lib/constants";

const NosotrosPage = () => {

    return (
        <div className="container mx-auto p-4 md:mb-32">
            <h1 className="text-4xl font-bold uppercase mt-4 text-white underline underline-offset-4">Nuestros entrenadores</h1>

            <div className="flex items-center justify-center md:justify-normal flex-wrap mt-8 gap-4">
                {trainers.map( (trainer, index) => (
                    <TrainerCard
                        key={index}
                        name={trainer.name}
                        instagram={trainer.instagram}
                        tiktok={trainer.tiktok}
                        image={trainer.image}
                        discipline={trainer.discipline}
                    />
                ))}
            </div>

            <h2 className="text-4xl mt-16 font-bold uppercase text-white underline underline-offset-4">Nuestras máquinas</h2>
            <div className="flex mt-8 gap-8 flex-wrap">

                {/* Machine card */}
                <div className="flex gap-4">
                    <Image
                        src={"/images/hacklift-244.webp"}
                        alt="hacklift 244 image"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col w-[150px]">
                        <span className="text-primary font-bold text-xl">Hacklift 244</span>
                        <p className="text-white">Máquina para trabajar piernas y glúteos</p>
                    </div>
                </div>

                {/* Machine card */}
                {machines.map(machine => (
                    <div key={machine.id} className="flex gap-4">
                        <Image
                            src={"/images/hacklift-244.webp"}
                            alt="hacklift 244 image"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col w-[150px]">
                            <span className="text-primary font-bold text-xl">{machine.name}</span>
                            <p className="text-white">{machine.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default NosotrosPage;