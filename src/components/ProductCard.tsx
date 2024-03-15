import Image from "next/image";
import { toCurrency } from '../utils/index';
import Link from "next/link";

type Props = {
    name: string;
    price: number;
    imagePath: string;
    brand: string;
};

const ProductCard = ({ name, price, imagePath, brand }: Props) => {
    return (
        <Link href={'/producto/1'}>
            <div className="rounded-lg border-2 border-primary p-2 w-52 transition ease-in duration-200 flex flex-col gap-4 items-center hover:border-white cursor-pointer">
                <div className="relative h-40 w-full">
                    <Image
                        className="rounded-lg object-cover"
                        src={ imagePath }
                        fill
                        alt="Product name"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold uppercase text-xl text-primary">{ name }</span>
                    <span className="block text-xs text-slate-300">{ brand }</span>
                </div>
                <hr className="w-full border-primary-300"/>
                <p className="text-2xl font-bold text-white">{ toCurrency( price ) }</p>
            </div>
        </Link>
    )
}

export default ProductCard;