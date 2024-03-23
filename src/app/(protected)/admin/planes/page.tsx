import { planes } from "@/lib/constants";
import { toCurrency } from "@/utils";
import { FaLock, FaUnlock } from "react-icons/fa";

// {
//     id: 4,
//     price: 6990,
//     name: 'Pase diario',
//     features: [
//         { id: 1, name: 'Trae cuantos clientes quieras' },
//         { id: 2, name: 'Acceso a área de cardio' },
//         { id: 3, name: 'Acceso a área de pesas' },
//         { id: 4, name: 'Acceso a sauna' },
//     ],
//     stock: 100
// },

const PlanesPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-primary text-4xl">Gestionar planes</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                                <thead className="border-b border-neutral-200  font-medium  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-white">Nombre</th>
                                        <th scope="col" className="px-6 py-4 text-white">Precio</th>
                                        <th scope="col" className="px-6 py-4 text-white">Stock</th>
                                        <th scope="col" className="px-6 py-4 text-white">Activo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { planes.map((plan, index) => (
                                        <tr className="border-b border-neutral-200" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{plan.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{toCurrency(plan.price)}</td>
                                            <td className={`${plan.stock > 0 ? 'text-green-400' : 'text-red-600'} whitespace-nowrap px-6 py-4 text-white font-bold`}>{plan.stock}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{ 
                                                true 
                                                    ? <button className='hover:scale-105 duration-300'><FaLock size={25} color='red'/></button>
                                                    : <button className='hover:scale-105 duration-300'><FaUnlock size={25} color='lgreen'/></button>}
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

export default PlanesPage;