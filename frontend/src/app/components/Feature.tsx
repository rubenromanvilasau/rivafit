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
                className="rounded-full w-32 h-32 bg-purple-700 border-2 border-purple-800 object-cover"
            />
            <span className="text-purple-300 font-bold text-xl">{ title }</span>
            <p>{ description }</p>
        </div>    
    )
}

export default Feature;