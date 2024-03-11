'use client';
import Image from "next/image";
import { toCurrency } from '../../../utils/index';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";


const ProductoPage = () => {
    const router = useRouter();

    const goToCheckout = () => {
        const id = uuidv4();
        router.push(`/checkout/${id}`);
    }

    return (
        <div className="container mx-auto p-4 md:pb-32">
            <div className="flex h-full gap-4 mt-4">
                <div className="w-1/2 relative">
                    <Image
                        className="object-cover rounded-lg"
                        src={'/images/creatina.jpg'}
                        alt="creatina"
                        fill
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-8">
                    <h1 className="text-purple-800 text-4xl font-bold tracking-widest uppercase">Creatina</h1>
                    <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum suscipit unde et similique accusamus. Nostrum tempora soluta non dicta laboriosam ullam voluptatem voluptatum officia, ducimus incidunt dolores. Saepe, aperiam?</p>
                    <span className="text-purple-300 tracking-widest text-4xl mt-4">{ toCurrency(23500) }</span>
                    <div className="flex justify-end">
                        <button 
                            className="bg-purple-800 text-white uppercase px-4 py-2 rounded-lg text-lg font-semibold hover:bg-transparent border-2 border-purple-800"
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