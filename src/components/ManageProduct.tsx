import { Modal } from "flowbite-react";

interface Props {
    show: boolean;
    onHide: () => void;
}

const ManageProduct = ({show, onHide}: Props) => {


    return (
        <Modal show={show} onClose={onHide} >
            <Modal.Header className="bg-black border-primary text-primary"><h1 className="text-primary">Agregar producto</h1></Modal.Header>
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
                        <label htmlFor="price" className="text-lg text-slate-300">Precio</label>
                        <input 
                            placeholder="Precio"
                            type="text" 
                            name="price" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="brand" className="text-lg text-slate-300">Marca</label>
                        <input 
                            placeholder="Marca"
                            type="text" 
                            name="brand" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="description" className="text-lg text-slate-300">Descripción</label>
                        <input 
                            placeholder="Descripción"
                            type="text" 
                            name="description" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <label htmlFor="stock" className="text-lg text-slate-300">Stock</label>
                        <input 
                            placeholder="Stock"
                            type="number" 
                            name="stock" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer className="flex justify-end bg-black border-primary"><button className="text-black bg-primary px-4 py-2 rounded-lg" type="submit">Crear</button></Modal.Footer>
        </Modal>
    )
}

export default ManageProduct;