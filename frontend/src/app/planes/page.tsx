'use client';

import PlanCard from "../components/PlanCard"
import { GetServerSideProps } from 'next';
import { prisma } from '../lib/prisma';

const planes = [
    { 
        id: 1, 
        name: 'Básico', 
        price: 35000,
        features: [
            { id: 1, description: 'Acceso a clases grupales' },
            { id: 2, description: 'Acceso a área de cardio' },
        ]
    },
    {
        id: 2,
        name: 'Intermedio',
        price: 55000,
        features: [
            { id: 1, description: 'Acceso a clases grupales' },
            { id: 2, description: 'Acceso a área de cardio' },
            { id: 3, description: 'Acceso a área de pesas' },
        ]
    },
    {
        id: 3,
        price: 60000,
        name: 'Avanzado',
        features: [
            { id: 1, description: 'Acceso a clases grupales' },
            { id: 2, description: 'Acceso a área de cardio' },
            { id: 3, description: 'Acceso a área de pesas' },
            { id: 4, description: 'Acceso a sauna' },
        ]
    },
    {
        id: 4,
        price: 60000,
        name: 'Entrenador',
        features: [
            { id: 1, description: 'Trae cuantos clientes quieras' },
            { id: 2, description: 'Acceso a área de cardio' },
            { id: 3, description: 'Acceso a área de pesas' },
            { id: 4, description: 'Acceso a sauna' },
        ]
    }
];

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const plans = await prisma.plan.findMany();
//     return {
//       props: plans,
//     };
// };

interface Plan {
    name: string;
    price: number;
    features: string[];
};

type Props = {
    plans: Plan;
};

const PlanesPage = ({ plans }: Props) => {

    console.log('plans ',plans);

    return (
        <div className="container mx-auto pt-2 pb-32">
            <h1 className="text-4xl uppercase font-bold mt-4">Nuestros planes</h1>

            {/* Cards planes */}
            <div className="flex justify-center gap-4 flex-wrap">
                { planes.map( plan => (
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