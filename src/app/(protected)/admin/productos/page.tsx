'use client'
import ManageProduct from "@/components/ManageProduct";
import { products } from "@/lib/constants";
import { toCurrency } from "@/utils";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductosPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-8">
            <h1 className="text-primary text-4xl">Gestionar productos</h1>
            <div className="flex justify-end w-100">
                <button 
                    className="rounded-lg bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary duration-300 px-4 py-2"
                    onClick={() => setIsModalOpen(true)}
                >
                    Agregar producto
                </button>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                                <thead className="border-b border-neutral-200  font-medium  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-white">Nombre</th>
                                        <th scope="col" className="px-6 py-4 text-white">Precio</th>
                                        <th scope="col" className="px-6 py-4 text-white">Marca</th>
                                        <th scope="col" className="px-6 py-4 text-white">Descripción</th>
                                        <th scope="col" className="px-6 py-4 text-white">Imagen</th>
                                        <th scope="col" className="px-6 py-4 text-white">Stock</th>
                                        <th scope="col" className="px-6 py-4 text-white"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { products.map((product, index) => (
                                        <tr className="border-b border-neutral-200" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4 text-white font-medium">{product.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-white">{toCurrency(product.price)}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{product.brand}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{product.description}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{product.imagePath}</td>
                                            <td className={`whitespace-nowrap px-6 py-4 text-white font-bold`}>{product.stock}</td>
                                            <td className={`whitespace-nowrap flex items-center gap-4 px-6 py-4 text-white font-bold`}>
                                                <button className="hover:scale-105 duration-300">
                                                    {<FaEdit size={24} color="white"/>}
                                                </button>
                                                <button className="hover:scale-105 duration-300">
                                                    {<FaTrash size={24} color="#e53935"/>}
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
            <ManageProduct
                show={isModalOpen}
                onHide={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default ProductosPage;