import Image from "next/image";

type Props = {
    imagePath: string;
    title: string;
    description: string;
}

const Feature = ({imagePath, title, description}: Props) => {
    return (
        <div className="flex flex-col items-center text-center w-40">
            <Image
                src={ imagePath } 
                width={100} 
                height={100} 
                alt={title} 
                className="rounded-full w-32 h-32 p-4 bg-primary border-2 border-primary object-cover"
            />
            <span className="text-primary font-bold text-xl">{ title }</span>
            <p className="text-white">{ description }</p>
        </div>    
    )
}

export default Feature;