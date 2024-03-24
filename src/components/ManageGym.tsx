
import { Modal } from "flowbite-react";

interface Props {
    show: boolean;
    onHide: () => void;
}

const ManageGym = ({show, onHide}: Props) => {


    return (
        <Modal show={show} onClose={onHide} >
            <Modal.Header className="bg-black border-primary text-primary"><h1 className="text-primary">Agregar gimnasio</h1></Modal.Header>
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
                        <label htmlFor="address" className="text-lg text-slate-300">Dirección</label>
                        <input 
                            placeholder="Dirección"
                            type="text" 
                            name="address" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="comuna" className="text-lg text-slate-300">Comuna</label>
                        <select name="comuna" className="outline-none border-b-2 bg-transparent border-yellow-400 focus:outline-none text-white p-2 w-full cursor-pointer">
                            <option  value={'Viña del mar'} className='text-primary bg-black'>{'Viña del mar'}</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="contact" className="text-lg text-slate-300">Contacto</label>
                        <input 
                            placeholder="Contacto"
                            type="text" 
                            name="contact" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="flex justify-end bg-black border-primary"><button className="text-black bg-primary px-4 py-2 rounded-lg" type="submit">Crear</button></Modal.Footer>
        </Modal>
    )
}

export default ManageGym;