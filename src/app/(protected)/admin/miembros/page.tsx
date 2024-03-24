'use client'
import { members } from '@/lib/constants';
import { FaLock, FaUnlock } from 'react-icons/fa';
import ManageMember from '@/components/ManageMember';
import { useState } from 'react';

const MembersPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className='p-8'>
            <h1 className='text-primary text-4xl'>Gestionar miembros</h1>
            <div className="flex justify-end w-100">
                <button 
                    className="rounded-lg bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary duration-300 px-4 py-2"
                    onClick={() => setIsModalOpen(true)}
                >
                    Agregar miembro
                </button>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                                <thead className="border-b border-neutral-200  font-medium  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-white">#</th>
                                        <th scope="col" className="px-6 py-4 text-white">Nombre</th>
                                        <th scope="col" className="px-6 py-4 text-white">Apellidos</th>
                                        <th scope="col" className="px-6 py-4 text-white">Rut</th>
                                        <th scope="col" className="px-6 py-4 text-white">Fecha inscripción</th>
                                        <th scope="col" className="px-6 py-4 text-white">Activo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { members.map((member, index) => (
                                        <tr className="border-b border-neutral-200 even:bg-medium-grey odd:bg-dark-grey" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4 text-white font-medium">{member.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{member.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{member.lastName}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{member.rut}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{member.createdAt}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{ 
                                                member.isActive 
                                                    ? <button className='hover:scale-105 duration-300'><FaLock size={25} color='#e53935'/></button>
                                                    : <button className='hover:scale-105 duration-300'><FaUnlock size={25} color='green'/></button>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ManageMember
                show={isModalOpen}
                onHide={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default MembersPage;