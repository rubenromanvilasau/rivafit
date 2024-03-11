import ProductCard from "../../components/ProductCard";

const products = [
    {
        id: 1,
        name: 'Creatina',
        price: 23500,
        brand: 'Nutrex',
        imagePath: '/images/creatina.jpg'
    },
    {
        id: 2,
        name: 'Proteina Whey',
        price: 49990,
        brand: 'Dymatize',
        imagePath: '/images/protein.jpg'
    },
    {
        id: 3,
        name: 'Shaker',
        price: 49990,
        brand: 'Dymatize',
        imagePath: '/images/shaker.jpg'
    },
    {
        id: 4,
        name: 'Proteina Whey',
        price: 49990,
        brand: 'Dymatize',
        imagePath: '/images/creatina.jpg'
    }
];

const TiendaPage = () => {
    return (
        <div className="container mx-auto pb-32">
            <h1 className="font-bold text-4xl mt-4">Tienda</h1>
            <div className="flex gap-4 flex-wrap mt-4">
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