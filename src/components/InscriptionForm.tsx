import { planes } from "@/lib/constants";

const InscriptionForm = () => {
    
    const onSubmit = (formData: FormData) => {
        console.log(formData);
    }

    return (
        <form action="asd" className="mx-auto md:mx-0 w-full h-1/2 md:w-1/2">
            <div className="bg-black rounded-lg p-8 mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-slate-400">Nombre</label>
                    <input 
                        placeholder="Nombre"
                        type="text" 
                        name="name" 
                        className="bg-transparent border-b-2 border-primary outline-none focus:outline-none focus:border-2 focus:rounded-lg text-white p-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-slate-400">Apellido</label>
                    <input 
                        placeholder="Apellido"
                        type="text" 
                        name="lastName" 
                        className="bg-transparent border-b-2 border-primary outline-none focus:outline-none focus:border-2 focus:rounded-lg  text-white p-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-slate-400">Número de contacto</label>
                    <div className="flex items-center gap-2">
                        <span className="text-primary font-bold text-sm">+56</span>
                        <input 
                            placeholder="Ej: 9 1234 5678"
                            type="tel" 
                            name="phone" 
                            className="bg-transparent border-b-2 border-primary outline-none focus:outline-none focus:border-2 focus:rounded-lg  text-white p-2 w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="plan" className="text-slate-400">Plan</label>
                    <select name="plan" className="bg-transparent border-b-2 border-primary rounded-none focus:outline-none text-white p-2 w-full cursor-pointer">
                        { planes.map( plan => (
                            <option key={plan.id} value={plan.id} className="bg-black text-white">{plan.name}</option>
                        ))}   
                    </select>
                </div>

                <div className="flex justify-end mt-8">
                    <button className="bg-primary border-2 border-primary rounded-lg px-4 py-2 text-black hover:bg-transparent  hover:text-primary transition-all ease-in duration-300 font-bold tracking-wide">Inscribirme</button>
                </div>
            </div>
        </form>
    )
}

export default InscriptionForm;