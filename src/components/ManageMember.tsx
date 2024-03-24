import { planes } from "@/lib/constants";
import { Modal } from "flowbite-react";

interface Props {
    show: boolean;
    onHide: () => void;
}

const ManageMember = ({show, onHide}: Props) => {



    return (
        <Modal show={show} onClose={onHide} >
            <Modal.Header className="bg-black border-primary text-primary"><h1 className="text-primary">Manage member</h1></Modal.Header>
            <Modal.Body className="bg-black">
                <form action="submit" className="flex items-center flex-wrap gap-2 justify-between">
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="name" className="text-lg text-slate-300">Nombre</label>
                        <input 
                            placeholder="Nombre"
                            type="text" 
                            name="name" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="lastName" className="text-lg text-slate-300">Apellidos</label>
                        <input 
                            placeholder="Apellidos"
                            type="text" 
                            name="lastName" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="rut" className="text-lg text-slate-300">Rut</label>
                        <input 
                            placeholder="Rut"
                            type="text" 
                            name="rut" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="plan" className="text-lg text-slate-300">Plan</label>
                        <select name="plan" className="outline-none border-b-2 bg-transparent border-yellow-400 focus:outline-none text-white p-2 w-full cursor-pointer">
                            {planes.map((plan, index) => (
                                <option key={index} value={plan.id} className='text-primary bg-black'>{plan.name}</option>
                            ))}
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="flex justify-end bg-black border-primary"><button className="text-black bg-primary px-4 py-2 rounded-lg" type="submit">Crear</button></Modal.Footer>
        </Modal>
    )
}

export default ManageMember;