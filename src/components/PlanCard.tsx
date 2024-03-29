import Link from "next/link"
import { toCurrency } from "../utils"

interface Feature {
    id: number;
    description: string;
    name: string;
}

type Props = {
    name: string;
    features: Feature[];
    price: number;
    stock: number;
}

const PlanCard = ({ name, features, price, stock }: Props) => {
    return (
        <div className="bg-transparent border border-primary rounded-lg w-fit mt-4 flex flex-col justify-between">
            <div className="bg-primary p-4 rounded-t-lg border-b-4 border-yellow-300">
                <div className="flex justify-between items-center">
                    <span className="text-xl  text-black">{ name }</span>
                    {/* <span className="text-xl text-purple-600">$ <span className="text-3xl text-white">{ toCurrency( price ) }</span></span> */}
                    <span className="text-3xl text-black font-semibold">{ toCurrency( price ) }</span>

                </div>
                {/* <span className="text-xs text-black font-light">Mensual</span> */}
            </div>
            <div className="p-4">
                <ul className="p-4">
                    { features.map( feature => (
                        <li key={feature.id} className="text-white border-b-2 border-yellow-300 mb-4">{ feature.name }</li>

                    ))}
                </ul>
            </div>
            <Link href={'/inscripcion'}>
                <button 
                    className={`${stock <= 0 && 'opacity-70 line-through'} w-full uppercase rounded-b-md font-bold tracking-wider text-primary p-4 bg-black border-2 border-primary transition-all ease-in duration-300`}
                    disabled={stock <= 0}
                >
                    { stock > 0 ? 'Lo quiero' : 'Agotado'}
                </button>
            </Link>
        </div>
    )
}

export default PlanCard