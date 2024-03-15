'use client';
import { toCurrency } from '../../../utils/index';

const CheckoutPage = () => {
    return (
        <div className="container mx-auto p-2 md:p-0">
            <h1 className="text-4xl font-bold mt-4 text-white">Checkout</h1>
            <div className="flex flex-col md:flex-row flex-wrap">

                <div className='flex flex-col w-full md:w-2/3 p-4 gap-16'>
                    <h2 className='text-2xl text-white'>Información de entrega</h2>

                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="lastName" className="text-lg text-slate-300">Nombre</label>
                            <input 
                                placeholder="Nombre"
                                type="text" 
                                name="name" 
                                className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                            />
                        </div>
                
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="surname" className="text-lg text-slate-300">Apellidos</label>
                            <input 
                                placeholder="Apellidos"
                                type="text" 
                                name="surname" 
                                className="border-b-2 bg-transparent border-yellow-400 utline-none focus:outline-none text-white p-2"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="address" className="text-lg text-slate-300">Dirección</label>
                        <input 
                            placeholder="Dirección"
                            type="text" 
                            name="address" 
                            className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                        />
                    </div>

                    <div className="flex gap-4 items-end md:items-center">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="house" className="text-lg text-slate-300">Casa, departamento (Opcional)</label>
                            <input 
                                placeholder="Casa, departamento, oficina (Opcional)"
                                type="text" 
                                name="house" 
                                className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                            />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label htmlFor="comuna" className="text-lg text-slate-300">Comuna</label>
                            <select name="comuna" className="outline-none border-b-2 bg-transparent border-yellow-400 focus:outline-none text-white p-2 w-full cursor-pointer">
                                <option value="" className='text-primary bg-black'>San Bernardo</option>   
                                <option value="" className='text-primary bg-black'>Las Condes</option>
                                <option value="" className='text-primary bg-black'>Providencia</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="region" className="text-lg text-slate-300">Región</label>
                        <select name="region" className="outline-none border-b-2 bg-transparent border-yellow-400 focus:outline-none text-white p-2 w-full cursor-pointer">
                            <option value="" className='text-primary bg-black'>Metropolitana</option>   
                            <option value="" className='text-primary bg-black'>Metropolitana</option>
                            <option value="" className='text-primary bg-black'>Metropolitana</option>
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="rut" className="text-lg text-slate-300">RUT</label>
                            <input 
                                placeholder="RUT"
                                type="text" 
                                name="rut" 
                                className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                            />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label htmlFor="phone" className="text-lg text-slate-300">Teléfono</label>
                            <input 
                                placeholder="Casa, departamento, oficina (Opcional)"
                                type="text" 
                                name="phone" 
                                className="border-b-2 bg-transparent border-yellow-400 outline-none focus:outline-none text-white p-2"
                            />
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/3 p-4 min-w-[208px]'>
                    <h3 className='text-xl text-white'>Resumen de orden</h3>


                    <hr className='mt-8'/>
                    <div className="flex justify-between">
                        <span className="font-bold text-primary text-xl">Total</span>
                        <span className="font-bold text-lg text-primary">{ toCurrency(2980) }</span>
                    </div>

                    <div className="flex items-end gap-4 mt-4">

                        <div className="flex flex-col w-1/2">
                            <label htmlFor="discount-code" className="text-lg text-white">Código de descuento</label>
                            <input 
                                placeholder="Cupón"
                                type="text" 
                                name="discount-code" 
                                className="bg-transparent border-b-2 border-primary outline-none focus:outline-none text-white p-2 uppercase"
                            />
                        </div>
                        <button className='bg-black text-white hover:border-primary uppercase px-4 py-2 rounded-lg font-semibold hover:bg-transparent border-2 h-1/2 mt-2'>Aplicar</button>
                    </div>

                    <button 
                        className="bg-primary text-black uppercase px-4 py-2 rounded-lg text-lg font-semibold hover:bg-transparent hover:text-primary border-2 border-primary w-full mt-16 transition-all ease-in-out duration-300"
                        onClick={() => console.log('Comprar')}
                    >
                        Confirmar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CheckoutPage;