// import { getAllPlans } from "@/lib/actions/plans";
import PlanCard from "@/components/PlanCard";
import { planes } from "@/lib/constants";

interface Plan {
    name: string;
    price: number;
    features: string[];
};

type Props = {
};

const PlanesPage = async ({  }: Props) => {
    // const plans = await getAllPlans();
    // console.log('plans', plans);

    return (
        <div className="container mx-auto p-2 pb-32">
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