import { gyms } from '@/lib/constants';
import { FaEdit } from 'react-icons/fa';

const GimnasiosPage = () => {
    return (
        <div className='p-8'>
            <h1 className='text-primary text-4xl'>Gestionar gimnasios</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                                <thead className="border-b border-neutral-200  font-medium  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-white">Nombre</th>
                                        <th scope="col" className="px-6 py-4 text-white">Dirección</th>
                                        <th scope="col" className="px-6 py-4 text-white">Comuna</th>
                                        <th scope="col" className="px-6 py-4 text-white">Contacto</th>
                                        <th scope="col" className="px-6 py-4 text-white"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { gyms.map((gym, index) => (
                                        <tr className="border-b border-neutral-200" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{gym.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{gym.address}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white`}>{gym.location}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{gym.contact}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">
                                                <button className='hover:scale-105 duration-300'>
                                                    {<FaEdit size={24} color='primary'/>}
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

export default GimnasiosPage;