import { getAllPlans } from "@/lib/actions/plans";
import PlanCard from "../../components/PlanCard";

const planes = [
    { 
        id: 1, 
        name: 'Básico', 
        price: 35000,
        features: [
            { id: 1, name: 'Acceso a clases grupales' },
            { id: 2, name: 'Acceso a área de cardio' },
        ]
    },
    {
        id: 2,
        name: 'Intermedio',
        price: 55000,
        features: [
            { id: 1, name: 'Acceso a clases grupales' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
        ]
    },
    {
        id: 3,
        price: 60000,
        name: 'Avanzado',
        features: [
            { id: 1, name: 'Acceso a clases grupales' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
            { id: 4, name: 'Acceso a sauna' },
        ]
    },
    {
        id: 4,
        price: 60000,
        name: 'Entrenador',
        features: [
            { id: 1, name: 'Trae cuantos clientes quieras' },
            { id: 2, name: 'Acceso a área de cardio' },
            { id: 3, name: 'Acceso a área de pesas' },
            { id: 4, name: 'Acceso a sauna' },
        ]
    }
];

interface Plan {
    name: string;
    price: number;
    features: string[];
};

type Props = {
};

const PlanesPage = async ({  }: Props) => {
    const plans = await getAllPlans();
    console.log('plans', plans);

    return (
        <div className="container mx-auto pt-2 pb-32">
            <h1 className="text-4xl uppercase font-bold mt-4 text-white">Nuestros planes</h1>

            {/* Cards planes */}
            <div className="flex justify-center gap-4 flex-wrap">
                { planes.map( (plan: any) => (
                    <PlanCard 
                        key={plan.id}
                        {...plan}
                    />
                
                ))}
            </div>
        </div>
    )
}

export default PlanesPage;