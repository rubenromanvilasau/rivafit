'use client';
import Image from "next/image";
import { toCurrency } from '../../../utils/index';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";


const ProductoPage = () => {
    const router = useRouter();

    const goToCheckout = () => {
        const id = uuidv4();
        router.push(`/checkout/${id}`);
    }

    return (
        <div className="container mx-auto p-4 pb-24 md:pb-32">
            <div className="flex flex-col md:flex-row items-center md:items-start h-full gap-4 mt-4">
                <div className="w-1/2 relative min-w-[430px] h-96 mx-auto">
                    <Image
                        className="object-cover rounded-lg"
                        src={'/images/creatina.jpg'}
                        alt="creatina"
                        fill
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-8 items-center md:items-start">
                    <h1 className="text-4xl font-bold tracking-widest uppercase text-primary">Creatina</h1>
                    <p className="text-md text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum suscipit unde et similique accusamus. Nostrum tempora soluta non dicta laboriosam ullam voluptatem voluptatum officia, ducimus incidunt dolores. Saepe, aperiam?</p>
                    <span className="text-white font-bold tracking-widest text-4xl mt-4">{ toCurrency(23500) }</span>
                    <div className="flex justify-center md:justify-end w-full">
                        <button 
                            className="bg-primary text-black uppercase px-4 py-2 rounded-lg text-lg font-semibold hover:bg-transparent hover:text-primary hover:border-primary border-2 border-black shadow-md transition-all ease-in-out duration-300"
                            onClick={goToCheckout}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductoPage;