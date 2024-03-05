import Link from "next/link"
import { toCurrency } from "../utils"

interface Feature {
    id: number
    description: string
}

type Props = {
    name: string
    features: Feature[]
    price: number
}

const PlanCard = ({ name, features, price }: Props) => {
    return (
        <div className="bg-white rounded-lg w-fit mt-4 flex flex-col justify-between">
            <div className="bg-purple-800 p-4 rounded-t-lg border-b-4 border-purple-950">
                <div className="flex justify-between items-center">
                    <span className="text-xl  text-white">{ name }</span>
                    {/* <span className="text-xl text-purple-600">$ <span className="text-3xl text-white">{ toCurrency( price ) }</span></span> */}
                    <span className="text-3xl text-white">{ toCurrency( price ) }</span>

                </div>
                <span className="text-xs text-white font-light">Mensual</span>
            </div>
            <div className="p-4">
                <ul className="p-4">
                    { features.map( feature => (
                        <li key={feature.id} className="text-slate-500 border-b-2 border-purple-300 mb-4">{ feature.description }</li>

                    ))}
                </ul>
            </div>
            <Link href={'/inscripcion'}>
                <button className='w-full uppercase rounded-b-md font-bold tracking-wider border-none text-purple-900 p-4 bg-slate-200 hover:bg-purple-700 hover:text-white transition-all ease-in duration-300'>
                    Lo quiero
                </button>
            </Link>
        </div>
    )
}

export default PlanCard