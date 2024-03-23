import { trainers } from "@/lib/constants";
import { FaEdit } from "react-icons/fa";

const EntrenadoresPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-primary text-4xl">Gestionar entrenadores</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                                <thead className="border-b border-neutral-200  font-medium  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-white">Nombre</th>
                                        <th scope="col" className="px-6 py-4 text-white">Instagram</th>
                                        <th scope="col" className="px-6 py-4 text-white">Tiktok</th>
                                        <th scope="col" className="px-6 py-4 text-white">Imagen</th>
                                        <th scope="col" className="px-6 py-4 text-white">Disciplina</th>
                                        <th scope="col" className="px-6 py-4 text-white"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { trainers.map((trainer, index) => (
                                        <tr className="border-b border-neutral-200" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{trainer.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{trainer.instagram}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{trainer.tiktok}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{trainer.image}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{trainer.discipline}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>
                                                <button className="hover:scale-105 duration-300">
                                                    {<FaEdit size={24} color="white"/>}
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntrenadoresPage;