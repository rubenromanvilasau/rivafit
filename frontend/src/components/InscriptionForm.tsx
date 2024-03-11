const InscriptionForm = () => {
    return (
        <form action="asd" className="mx-auto md:mx-0 w-full  h-1/2 md:w-1/2">
            <div className="bg-white rounded-lg p-8 mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-slate-700">Nombre</label>
                    <input 
                        placeholder="Nombre"
                        type="text" 
                        name="name" 
                        className="border-b-2 border-purple-800 outline-none focus:outline-none focus:border-2 focus:rounded-lg text-purple-800 p-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-slate-700">Apellido</label>
                    <input 
                        placeholder="Apellido"
                        type="text" 
                        name="lastName" 
                        className="border-b-2 border-purple-800 outline-none focus:outline-none focus:border-2 focus:rounded-lg  text-purple-800 p-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-slate-700">Número de contacto</label>
                    <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-bold text-sm">+56</span>
                        <input 
                            placeholder="Ej: 9 1234 5678"
                            type="tel" 
                            name="phone" 
                            className="border-b-2 border-purple-800 outline-none focus:outline-none focus:border-2 focus:rounded-lg  text-purple-800 p-2 w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="plan" className="text-slate-700">Plan</label>
                    <select name="plan" className="outline-none border-b-2 border-purple-800 rounded-none focus:outline-none text-purple-800 p-2 w-full cursor-pointer">
                        <option value="">Básico</option>   
                        <option value="">Intermedio</option>
                        <option value="">Full</option>
                    </select>
                </div>

                <div className="flex justify-end">
                    <button className="bg-purple-800 rounded-lg px-4 py-2 hover:bg-white hover:border-2 hover:border-purple-800 hover:text-purple-800 transition-all ease-in duration-300 font-bold tracking-wide">Inscribirme</button>
                </div>
            </div>
        </form>
    )
}

export default InscriptionForm;