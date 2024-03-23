import { products } from "@/lib/constants";
import ProductCard from "../../components/ProductCard";

const TiendaPage = () => {
    return (
        <div className="container p-4 mx-auto md:pb-32">
            <h1 className="font-bold text-4xl mt-4 text-white">Tienda</h1>
            <div className="flex gap-16 flex-wrap mt-4">
                { products.map( product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imagePath={product.imagePath}
                        brand={product.brand}
                    />
                ))}
            </div>
        </div>
    )
}

export default TiendaPage;